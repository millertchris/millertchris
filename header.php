<!doctype html>
<?php $site_url = site_url(); ?>
<?php $template_directory = get_template_directory_uri() . '/favicon.ico'; ?>


<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
<head>

	<?php if (is_search()) { ?>
		<meta name="robots" content="noindex, nofollow">
	<?php } ?>

	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>">

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>

    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/static/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/static/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/static/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo get_template_directory_uri(); ?>/static/favicon/site.webmanifest">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/static/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>

<body <?php body_class('body'); ?>>

    <a href="#main" class="skip-nav">Skip navigation</a>

    <header class="header">
        <div class="wrapper">
            <div class="row">
                <div class="col">
                    <a class="logo" href="/" target="_self">Logo</a>
                </div>
                <div class="col">
                    <nav id="main-menu">
                        <?php
                            $args = array(
                                'theme_location' 	=> 'main-menu',
                                'container' 		=> 'ul',
                                'items_wrap' 		=> '%3$s'
                            );
                        ?>
                        <?php wp_nav_menu($args); ?>
                    </nav>
                </div>
            </div>
        </div>
    </header>

<main id="main">