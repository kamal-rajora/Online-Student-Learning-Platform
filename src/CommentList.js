import React from 'react'

export default function CommentList() {
  return (
    <div>
        <div class="mb-5">
                    <h2 class="mb-4">3 Comments</h2>
                    <div class="media mb-4">
                        <img src="img/user.jpg" alt="Image" class="img-fluid rounded-circle mr-3 mt-1" style={{width: "45px"}}/>
                        <div class="media-body">
                            <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                            <button class="btn btn-sm btn-light">Reply</button>
                        </div>
                    </div>
                    <div class="media mb-4">
                        <img src="img/user.jpg" alt="Image" class="img-fluid rounded-circle mr-3 mt-1" style={{width: "45px"}}/>
                        <div class="media-body">
                            <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                            <button class="btn btn-sm btn-light">Reply</button>
                            <div class="media mt-4">
                                <img src="img/user.jpg" alt="Image" class="img-fluid rounded-circle mr-3 mt-1" style={{width: "45px"}}/>
                                <div class="media-body">
                                    <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur, at tempor amet ipsum diam tempor at sit.</p>
                                    <button class="btn btn-sm btn-light">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
