import React from 'react'

export default function SearchForm() {
  return (
    <div>
        <div class="mb-5">
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Keyword"/>
                            <div class="input-group-append">
                                <span class="input-group-text bg-transparent text-primary"><i
                                        class="fa fa-search"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
    </div>
  )
}
