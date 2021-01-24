<?php
    //======================================================================
    // Checking if FacetWP is Activated
    //======================================================================
    function facetwp_activated() {
        if (function_exists('facetwp_display')) {
            return true;
        }
        return false;
    }

    // =========================================================================
    // ADDING SUPPORT FOR FACETWP
    // =========================================================================
    add_filter( 'facetwp_is_main_query', function( $bool, $query ) {
        return ( true === $query->get( 'facetwp' ) ) ? true : $bool;
    }, 10, 2 );

    //======================================================================
    // ADDING SUBMIT/RESET BUTTON TO FACETWP
    //======================================================================
    function add_facetwp_submit() {
    ?>
    <script>(function($) {
    $(document).on('facetwp-loaded', function() {
        $('.facetwp-input-wrap').each(function() {
            if ($(this).find('.facetwp-search-submit').length < 1) {
                $(this).find('.facetwp-search').after('<button onclick="FWP.reset()">Reset</button>');
                $(this).find('.facetwp-search').after('<button class="facetwp-search-submit" onclick="FWP.refresh()">Submit</button>');
            }
        });
    });
    })(jQuery);
    </script>
    <?php
    }

    //======================================================================
    // ADDING LABELS TO FACETWP
    //======================================================================
    function fwp_add_facet_labels() {
        ?>
        <script>
        (function($) {
            $(document).on('facetwp-loaded', function() {
                $('.facetwp-facet').each(function() {
                    var $facet = $(this);
                    var facet_name = $facet.attr('data-name');
                    var facet_label = FWP.settings.labels[facet_name];
        
                    if ($facet.closest('.facet-wrap').length < 1 && $facet.closest('.facetwp-flyout').length < 1) {
                        $facet.wrap('<div class="facet-wrap"></div>');
                        $facet.before('<h3 class="h6 facet-label">' + facet_label + '</h3>');
                    }
                });
            });
        })(jQuery);
        </script>
        <?php
        }

?>