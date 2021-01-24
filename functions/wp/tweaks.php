<?php
    //======================================================================
    // ADD AN ADMIN SCRIPT TO MANAGE JS
    //======================================================================
    function admin_resources() {
        wp_register_script('admin_script', get_stylesheet_directory_uri() . '/dist/assets/js/admin-scripts.min.js');
        wp_enqueue_script('admin_script');
    }

    // =========================================================================
    // REGISTERING SIDEBAR
    // =========================================================================
    if (function_exists('register_sidebar')) {
        register_sidebar([
            'name' => 'Sidebar Widgets',
            'id'   => 'sidebar-widgets',
            'description'   => 'These are widgets for the sidebar.',
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2>',
            'after_title'   => '</h2>'
        ]);
    }

    // =========================================================================
    // ENABLES 100% JPEG QUALITY
    // =========================================================================
    // Wordpress will compress uploads to 90% of their original size
    function high_jpg_quality() {
        return 100;
    }