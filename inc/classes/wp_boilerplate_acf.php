<?php

    class WP_Boilerplate_ACF {
        //======================================================================
        // CUSTOMIZE ACF JSON SAVE FOLDER
        //======================================================================
        static function json_save_folder( $path ) {
            
            // update path
            $path = get_stylesheet_directory() . '/functions/acf/json/';
            
            // return
            return $path;
            
        }

        //======================================================================
        // CUSTOMIZE ACF JSON LOAD FOLDER
        //======================================================================
        static function json_load_folder( $paths ) {
            
            // remove original path (optional)
            unset($paths[0]);
            
            // append path
            $paths[] = get_stylesheet_directory() . '/functions/acf/json/';
            
            // return
            return $paths;
            
        }

        //======================================================================
        // ADD OPTIONS PAGE
        //======================================================================
        static function add_option_page() {
            if ( function_exists( 'acf_add_options_page' ) ) {

                acf_add_options_page( array(
                    'page_title'	=> 'App Options',
                    'menu_title'	=> 'App Options',
                    'menu_slug' 	=> 'acf-app-options',
                    'capability'	=> 'edit_posts',
                    'redirect'		=> false,
                ));
            
            }
        }

        static function register_hero_block() {

            if ( function_exists( 'acf_register_block_type' ) ) {

                // Register Hero block
                acf_register_block_type( array(
                    'name' 					=> 'hero',
                    'title' 				=> __( 'Hero' ),
                    'description' 			=> __( 'A custom Hero block.' ),
                    'category' 				=> 'formatting',
                    'icon'					=> 'layout',
                    'keywords'				=> array( 'hero' ),
                    'post_types'			=> array( 'post', 'page' ),
                    'mode'					=> 'auto',
                    // 'align'				=> 'wide',
                    'render_template'		=> 'template-parts/blocks/hero.php',
                    // 'render_callback'	=> 'hero_block_render_callback',
                    // 'enqueue_style' 		=> get_template_directory_uri() . '/template-parts/blocks/hero/hero.css',
                    // 'enqueue_script' 	=> get_template_directory_uri() . '/template-parts/blocks/hero/hero.js',
                    // 'enqueue_assets' 	=> 'hero_block_enqueue_assets',
                ));

            }
        }

        static function register_listing_block() {

            if ( function_exists( 'acf_register_block_type' ) ) {

                // Register Listing block
                acf_register_block_type( array(
                    'name' 					=> 'listing',
                    'title' 				=> __( 'Listing' ),
                    'description' 			=> __( 'A custom Listing block.' ),
                    'category' 				=> 'formatting',
                    'icon'					=> 'layout',
                    'keywords'				=> array( 'listing' ),
                    'post_types'			=> array( 'post', 'page' ),
                    'mode'					=> 'auto',
                    // 'align'				=> 'wide',
                    'render_template'		=> 'template-parts/blocks/listing.php',
                    // 'render_callback'	=> 'listing_block_render_callback',
                    // 'enqueue_style' 		=> get_template_directory_uri() . '/template-parts/blocks/listing/listing.css',
                    // 'enqueue_script' 	=> get_template_directory_uri() . '/template-parts/blocks/listing/listing.js',
                    // 'enqueue_assets' 	=> 'listing_block_enqueue_assets',
                ));

            }

        }
    }