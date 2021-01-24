<?php
    // =========================================================================
    // ADD RSS LINKS TO HEAD SECTION
    // =========================================================================
    add_theme_support('automatic-feed-links');

    // =========================================================================
    // ENABLES FEATURED IMAGES FOR PAGES AND POSTS
    // =========================================================================
    // This enables post thumbnails for all post types,
    // if you want to enable this feature for specific post types,
    // use the array to include the type of post
    ## add_theme_support('post-thumbnails', array('post', 'page'));
    add_theme_support('post-thumbnails');

    // =========================================================================
    // TITLE TAG - RECOMMENDED
    // =========================================================================
    // Since Version 4.1, themes should use add_theme_support() in the functions.php
    // file in order to support title tag
    function theme_slug_setup() {
        add_theme_support('title-tag');
    }

    // =========================================================================
    // REGISTER MENUS
    // =========================================================================
    function wp_boilerplate_register_nav_menu(){
        register_nav_menus( array(
            'header-menu' => __( 'Header Menu', 'text_domain' ),
            'action-menu' => __( 'Action Menu', 'text_domain' ),
            'footer-menu'  => __( 'Footer Menu', 'text_domain' ),
        ) );
    }
    
    // SVG UPLOADS - ALLOWING SVG UPLOADS TO WORDPRESS
    // =========================================================================
    function wp_boilerplate_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }