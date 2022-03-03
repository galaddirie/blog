import React, { useEffect } from 'react'
import { Container, } from 'react-bootstrap'
import $ from 'jquery'
import { PostCard } from '../../components/Posts/Post';

function TableOfContent() {

    useEffect(() => {
        /* SNIPPET https://codepen.io/GeoffreyCrofte/pen/xOPdLZ
        
         */
        var positions = [],
            build_toc = function () {
                var output = "<p>Table of content</p><ul class='sticky'>",
                    svg = '<svg viewBox="0 0 36 36" height="36px" width="36px" y="0px" x="0px"><circle transform="rotate(-90 18 18)" stroke-dashoffset="100" stroke-dasharray="100 100" r="16" cy="18" cx="18" stroke-width="2" fill="none"/></svg>';

                $('.post-content').find('h2').each(function (i) {
                    $(this).attr('id', 'title_' + i)

                    output += '<li><a href="#title_' + i + '" class="toc-title_' + i + '">' + svg + $(this).text() + '</a></li>';
                });

                return output;
            },
            get_bottom_off_content = function () {
                var $content = $('.post-content'),
                    offset = $content.offset();

                return $content.outerHeight() + offset.top;
            },
            get_positions = function () {
                $('.post-content').find('h2').each(function (i) {
                    var offset = $(this).offset();
                    positions['title_' + i] = offset.top - 20;
                });
                return positions;
            },
            set_toc_reading = function () {
                var st = $(document).scrollTop(),
                    count = 0;

                for (var k in positions) {
                    var n = parseInt(k.replace('title_', ''));
                    var has_next = typeof positions['title_' + (n + 1)] !== 'undefined',
                        not_next = has_next && st < positions['title_' + (n + 1)] ? true : false,
                        diff = 0,
                        $link = $('.toc-' + k);

                    if (has_next) {
                        diff = (st - positions[k]) / (positions['title_' + (n + 1)] - positions[k]) * 100;
                    } else {
                        diff = (st - positions[k]) / (get_bottom_off_content() - positions[k]) * 100;
                    }

                    $link.find('circle').attr('stroke-dashoffset', Math.round(100 - diff));

                    if (st >= positions[k] && not_next && has_next) {
                        $('.toc-' + k).addClass('toc-reading');
                    } else if (st >= positions[k] && !not_next && has_next) {
                        $('.toc-' + k).removeClass('toc-reading');
                    } else if (st >= positions[k] && !not_next && !has_next) {
                        $('.toc-' + k).addClass('toc-reading');
                    }

                    if (st >= positions[k]) {
                        $('.toc-' + k).addClass('toc-already-read');
                    } else {
                        $('.toc-' + k).removeClass('toc-already-read');
                    }

                    if (st < positions[k]) {
                        $('.toc-' + k).removeClass('toc-already-read toc-reading');
                    }

                    count++;
                }
            };

        // build our table of content
        $('.table-of-contents').html(build_toc());

        // first definition of positions
        get_positions();

        // on resize, re-calc positions
        $(window).on('resize', function () {
            get_positions();
        });

        $(document).on('scroll', function () {
            set_toc_reading();
        });
        var stickEl = $('.sticky'),
            stickyElTop = stickEl.offset().top;

        var sticky = function () {
            var scrollTop = $(window).scrollTop();

            if (stickyElTop < scrollTop + 20) {
                stickEl.addClass('is-fixed');
            } else {
                stickEl.removeClass('is-fixed');
            }
        };

        $(window).scroll(function () {
            sticky();
        });

    });
    return (
        <div className='table-of-contents-container py-4'>
            <aside class="table-of-contents px-3 sidebar">


            </aside>
        </div>

    )

}

export default function BlogArticle() {
    return (
        <div className='py-5 container' >

            <section class="">
                <div class="row">
                    <div class="col-xl-3">
                        <TableOfContent />
                    </div>
                    <div class="col-xl-9">
                        <div class="">
                            <div class="d-flex align-items-center mt-lg-5 mb-4">
                                <img class="img-fluid rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." />
                                <div class="ms-3">
                                    <div class="fw-bold">Valerie Luna</div>
                                    <div class="text-muted">News, Business</div>
                                </div>
                            </div>
                        </div>
                        <article className='post-content'>

                            <header class="mb-4">

                                <h1 class="fw-bolder mb-1">Welcome to Blog Post!</h1>

                                <div class="text-muted fst-italic mb-2">January 1, 2021</div>

                                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                                <a class="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                            </header>

                            <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>

                            <section class="mb-5">
                                <h1>Table of content with progress bar</h1>
                                <p>The best web to build this kind of Table Of Content is using JS. Editor will just have to be focus on his main task: writing.</p>

                                <h2>How to build it</h2>
                                <p>First at all, you need to see this pen in Edit Mode to watch the code, then, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nesciunt facere ullam amet tempora voluptatum molestiae inventore asperiores ad itaque architecto consectetur, expedita nulla at perspiciatis velit excepturi blanditiis doloribus.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, neque aperiam eum. Libero ut saepe ab numquam sed, quia enim quisquam maxime amet vero. Vitae quasi quidem doloremque eos. Quod! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim in, ex, ad non at quibusdam quaerat. Iste deserunt dolor assumenda deleniti quam, qui vitae exercitationem, neque rerum voluptate sunt quo!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nobis eius reprehenderit vel ad quisquam. Accusamus quia, modi doloribus rerum voluptatum debitis dolorem placeat cupiditate itaque, animi suscipit deserunt explicabo.</p>

                                <h2>Lorem ipsum dolor sit</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit enim modi cumque porro non beatae autem, ea ab dolor delectus ipsum reiciendis a aliquid error, necessitatibus, unde aperiam corporis facere. Optio distinctio ipsam mollitia nobis sit explicabo quod magni quas tempore aperiam in est at, molestiae maiores veritatis impedit dolore adipisci voluptate, expedita soluta! Architecto officia, omnis nulla sint iure laboriosam ea? Repellendus molestias amet eius libero dolorem tempore nihil omnis ullam velit dolores expedita eum accusantium pariatur voluptates quaerat, modi dignissimos laudantium quod odit. Earum dignissimos eos at corporis debitis tempore ea molestiae illum, obcaecati amet incidunt ratione tenetur natus, modi culpa. Dolor excepturi quas sunt itaque cum nihil pariatur atque dolorum doloremque officia ea enim doloribus inventore laudantium maiores dolores, velit, fugiat facere officiis architecto. Explicabo distinctio aut quidem ex quod cupiditate delectus, expedita velit accusantium, ratione, illum doloribus cum. Aspernatur explicabo, fugit quaerat, reiciendis soluta ratione cum, dolore quasi sint consequatur facere ipsa. Eos illo nam natus! Perspiciatis hic impedit, sed culpa tenetur id, quibusdam harum expedita nostrum, nihil itaque. Fugit, incidunt, minus! Voluptatibus aut optio neque delectus sapiente eos totam veritatis minima cupiditate saepe odit, ratione hic veniam mollitia, quasi. Laborum eos nesciunt maxime sequi unde.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur at cumque aut eos autem dolorem quibusdam hic accusantium officiis sunt fugiat laboriosam quasi commodi doloribus laborum assumenda, culpa optio magni minus provident vel ut explicabo voluptas? Eaque consequuntur neque a illum, voluptatem at accusantium ipsa provident nulla, quia quasi iusto.</p>

                                <h2>Et voilàààà!</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit enim modi cumque porro non beatae autem, ea ab dolor delectus ipsum reiciendis a aliquid error, necessitatibus, unde aperiam corporis facere. Optio distinctio ipsam mollitia nobis sit explicabo quod magni quas tempore aperiam in est at, molestiae maiores veritatis impedit dolore adipisci voluptate, expedita soluta! Architecto officia, omnis nulla sint iure laboriosam ea? Repellendus molestias amet eius libero dolorem tempore nihil omnis ullam velit dolores expedita eum accusantium pariatur voluptates quaerat, modi dignissimos laudantium quod odit. Earum dignissimos eos at corporis debitis tempore ea molestiae illum, obcaecati amet incidunt ratione tenetur natus, modi culpa. Dolor excepturi quas sunt itaque cum nihil pariatur atque dolorum doloremque officia ea enim doloribus inventore laudantium maiores dolores, velit, fugiat facere officiis architecto. Explicabo distinctio aut quidem ex quod cupiditate delectus, expedita velit accusantium, ratione, illum doloribus cum. Aspernatur explicabo, fugit quaerat, reiciendis soluta ratione cum, dolore quasi sint consequatur facere ipsa. Eos illo nam natus! Perspiciatis hic impedit, sed culpa tenetur id, quibusdam harum expedita nostrum, nihil itaque. Fugit, incidunt, minus! Voluptatibus aut optio neque delectus sapiente eos totam veritatis minima cupiditate saepe odit, ratione hic veniam mollitia, quasi. Laborum eos nesciunt maxime sequi unde.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur at cumque aut eos autem dolorem quibusdam hic accusantium officiis sunt fugiat laboriosam quasi commodi doloribus laborum assumenda, culpa optio magni minus provident vel ut explicabo voluptas? Eaque consequuntur neque a illum, voluptatem at accusantium ipsa provident nulla, quia quasi iusto.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur at cumque aut eos autem dolorem quibusdam hic accusantium officiis sunt fugiat laboriosam quasi commodi doloribus laborum assumenda, culpa optio magni minus provident vel ut explicabo voluptas? Eaque consequuntur neque a illum, voluptatem at accusantium ipsa provident nulla, quia quasi iusto.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur at cumque aut eos autem dolorem quibusdam hic accusantium officiis sunt fugiat laboriosam quasi commodi doloribus laborum assumenda, culpa optio magni minus provident vel ut explicabo voluptas? Eaque consequuntur neque a illum, voluptatem at accusantium ipsa provident nulla, quia quasi iusto.</p>
                            </section>
                        </article>


                    </div>
                </div>
            </section>

            <section className='article-footer'>
                <div className='row' >
                    <div className='col-xl-3'></div>
                    <div className='col-xl-9 comment-section bg-light'></div>
                </div>
            </section>


        </div>

    )
}
