<?php
    // =========================================================================
    // REGISTER & ENQUEUE
    // =========================================================================
    function wp_boilerplate_resources() {
        wp_enqueue_style('wp-boilerplate', get_template_directory_uri() . '/dist/main.css');

        wp_deregister_script('jquery');
        wp_register_script('jquery', ('//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js'), '', '2.2.4', true);
        wp_enqueue_script('jquery');

        wp_enqueue_script('wp-vue', '//cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js', '', '', true);        
        wp_enqueue_script('wp-boilerplate', get_template_directory_uri() . '/dist/main.js', '', '', true);        
    }

    //======================================================================
    // META TAGS
    //======================================================================
    // Adding meta so that we can load it in non Wordpress pages i.e. Netforum
    function add_meta_tags() {
        echo '<meta name="viewport" content="width=device-width,initial-scale=1" />' . "\n";
    }
