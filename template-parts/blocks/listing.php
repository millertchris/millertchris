<?php
/**
 * Block template file: template-parts/blocks/listing.php
 *
 * Listing Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'listing-' . $block['id'];
if ( ! empty($block['anchor'] ) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$classes = 'block-listing';
if ( ! empty( $block['className'] ) ) {
    $classes .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $classes .= ' align' . $block['align'];
}
?>

<style type="text/css">
	<?php echo '#' . $id; ?> {
		/* Add styles that use ACF values here */
	}
</style>

<div id="<?php echo esc_attr( $id ); ?>" class="<?php echo esc_attr( $classes ); ?>">
	<?php 

	$args = [
		'post_type' => get_field( 'post_type' ),
		'order'		=> get_field( 'order' ),
		'orderby'	=> get_field( 'orderby' ),
		'posts_per_page' => get_field( 'posts_per_page' ),
	];

	// the query
	$the_query = new WP_Query( $args ); ?>
	
	<?php if ( $the_query->have_posts() ) : ?>
	
		<!-- pagination here -->
	
		<!-- the loop -->
		<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
			<h2><?php the_title(); ?></h2>
		<?php endwhile; ?>
		<!-- end of the loop -->
	
		<!-- pagination here -->
	
		<?php wp_reset_postdata(); ?>
	
	<?php else : ?>
		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	<?php endif; ?>
	
</div>