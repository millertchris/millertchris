<?php

//======================================================================
    // ADD RESPONSIVE CONTAINER TO EMBEDS
    //======================================================================
    function video_embed_wrapper($html) {
        return '<div class="video-wrapper">' . $html . '</div>';
    }

//======================================================================
// CUSTOM EXCERPT
//======================================================================
function custom_excerpt($limit) {
	$excerpt = explode(' ', get_the_excerpt(), $limit);
	if (count($excerpt)>=$limit) {
		array_pop($excerpt);
		$excerpt = implode(' ', $excerpt) . '...';
	} else {
		$excerpt = implode(' ', $excerpt);
	}
	$excerpt = preg_replace('`[[^]]*]`', '', $excerpt);
	return $excerpt;
}

//======================================================================
// REPLACE EXCERPT
//======================================================================
// Replaces the excerpt "Read More" text with a link
function new_excerpt_more($more) {
	global $post;
	return '...';
	// return '<a class="moretag" href="'. get_permalink($post->ID) . '"> ...read more.</a>';
}

//======================================================================
// Facets - Changing placeholder text
//======================================================================
add_filter( 'facetwp_facet_html', function( $output, $params ) {
	if ( 'end_date' == $params['facet']['name'] ) { // change 'my_date_facet' to the name of your date picker facet
		$output = str_replace( 'placeholder="End Date"', 'placeholder="Select"', $output );
	} elseif ( 'start_date' == $params['facet']['name'] ) { // change 'my_date_facet' to the name of your date picker facet
		$output = str_replace( 'placeholder="Start Date"', 'placeholder="Select"', $output );
	} 
	return $output;
}, 10, 2 );

//======================================================================
// LISTING LAYOUT - function to loop through the Event Filters and spit out the markup
//======================================================================
function event_filters() {
	$facets = get_sub_field('event_filters');

	if(count($facets) > 0) {
		echo '<div class="row">
					<div class="col">
						<div class="fieldset filters">
							<h1 class="title h4">Filters</h1>';
							foreach($facets as $facet) {
								echo facetwp_display( 'facet', $facet );
							}
				   echo '</div>
					</div>
			  </div>';
	}
}


function table_of_contents($post_type) {
	global $post;
	$parent_id = $post->ID;
	
	if ($post->post_parent) {
		$parent_id = $post->post_parent;
	}

	$args = array(
		'post_parent' => $parent_id,
		'post_type' => $post_type,
		'posts_per_page' => '-1',
		'orderby' => ['menu_order' => 'ASC']
	);

	$parent = get_post($parent_id);
	$children = get_children($args);
	$children_ids = [];

	$table_of_contents = [$parent];

	foreach ($children as $key => $value) {
		array_push($table_of_contents, $value);
	}

	return $table_of_contents;
}

function table_of_contents_nav($post_type) {
	global $post;
	$post->ID;

	$table_of_contents = table_of_contents($post_type);

	foreach ($table_of_contents as $key => $value) {
		if($value->menu_order == $post->menu_order) {

			$current_key = $key;
			$next_item = $current_key;
			$previous_item = $current_key;

			if ($current_key === 0) {

				$nav = [
					'previous' => null,
					'next' => $table_of_contents[++$next_item]->ID
				];


			} elseif (array_key_last($table_of_contents) == $current_key) {

				$nav = [
					'previous' => $table_of_contents[--$previous_item]->ID,
					'next' => null
				];

			} else {

				$nav = [
					'previous' => $table_of_contents[--$previous_item]->ID,
					'next' => $table_of_contents[++$next_item]->ID
				];
	
			}

			return $nav;
		}
	}

	return null;
}

function has_children() {
	global $post;
	return count( get_posts( array('post_parent' => $post->ID, 'post_type' => $post->post_type) ) );
}

// Get taxonomy names with commas in between
function tax_names($post_id, $tax) {
	$terms = get_the_terms($post_id, $tax);

		if ($terms) {

		$term_names = [];
		foreach ($terms as $term) {
			array_push($term_names, $term->name);

		};

		$tax_list = implode(', ', $term_names);

		return $tax_list;

		} else {
			return 'no ' . $tax . ' found';
		}
};

// Get taxonomy names and ouput as list items
function tax_list($post_id, $tax) {
	$terms = get_the_terms($post_id, $tax);
	$term_names = [];
	foreach ($terms as $term) {
		array_push($term_names, $term->name);
	};
	$tax_list = implode(',&nbsp;</li><li>', $term_names);

	echo '<li>' . $tax_list . '</li>';
};

// Get taxonomy names and ouput as links
function tax_links($post_id, $tax) {
	$terms = get_the_terms($post_id, $tax);
	$term_names = [];
	foreach ($terms as $term) {
		array_push($term_names, $term->name);
	};
	$tax_list = implode('</a>,&nbsp;<a href="#">', $category_names);

	echo '<a href="#">' . $tax_list . '</a>';
};

// Updates tax_query in listing.php 
function update_tax_query($tax_query, $taxonomy, $term_id) {
    $tax_query[] = [
        'taxonomy' => $taxonomy,
        'field'    => 'term_id',
        'terms'    => $term_id,
    ];

    return $tax_query;
}

function get_custom_date($date, $old_format, $new_format) {
	// https://www.php.net/manual/en/datetime.createfromformat.php
	// Setup new object.
	$datetime = new DateTime();
	// Pass both the expected format that matches the date format.
	$newDate = $datetime->createFromFormat($old_format, $date);
	// Return a new format
	return $newDate->format($new_format);
}

function get_custom_time($time, $old_format, $new_format) {
	// https://www.php.net/manual/en/datetime.createfromformat.php
	// Setup new object.
	$datetime = new DateTime();
	// Pass both the expected format that matches the time format.
	$newDate = $datetime->createFromFormat($old_format, $time);
	// Return a new format
	return $newDate->format($new_format);
}
?>

