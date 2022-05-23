import React from 'react'
import RelatedPost from './RelatedPost'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import AuthorBio from './AuthorBio'
import SearchForm from './SearchForm'
import CategoryList from './CategoryList'
import RecentPost from './RecentPost'
import TagCloud from './TagCloud'
import PlainText from './PlainText'

export default function Detail() {
  return (
    <div>
        <div class="container py-5">
        <div class="row pt-5">
            <div class="col-lg-8">
                <div class="d-flex flex-column text-left mb-3">
                    <p class="section-title pr-5"><span class="pr-2">Blog Detail Page</span></p>
                    <h1 class="mb-3">Diam dolor est ipsum clita lorem</h1>
                    <div class="d-flex">
                        <p class="mr-3"><i class="fa fa-user text-primary"></i> Admin</p>
                        <p class="mr-3"><i class="fa fa-folder text-primary"></i> Web Design</p>
                        <p class="mr-3"><i class="fa fa-comments text-primary"></i> 15</p>
                    </div>
                </div>
                <div class="mb-5">
                    <img class="img-fluid rounded w-100 mb-4" src="img/detail.jpg" alt="Image"/>
                    <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
                    <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
                    <h2 class="mb-4">Est dolor lorem et ea</h2>
                    <img class="img-fluid rounded w-50 float-left mr-4 mb-3" src="img/blog-1.jpg" alt="Image"/>
                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.</p>
                    <h3 class="mb-4">Est dolor lorem et ea</h3>
                    <img class="img-fluid rounded w-50 float-right ml-4 mb-3" src="img/blog-2.jpg" alt="Image"/>
                    <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no.</p>
                </div>
                    <RelatedPost></RelatedPost>
                    <CommentList></CommentList>
                    <CommentForm></CommentForm>
                <div class="col-lg-4 mt-5 mt-lg-0"></div>
                    <AuthorBio></AuthorBio>
                    <SearchForm></SearchForm>
                    <CategoryList></CategoryList>
                    <div class="mb-5">
                    <img src="img/blog-1.jpg" alt="" class="img-fluid rounded"/>
                    </div>
                    <RecentPost></RecentPost>
                    <div class="mb-5">
                    <img src="img/blog-2.jpg" alt="" class="img-fluid rounded"/>
                    </div>
                    <TagCloud></TagCloud>
                    <div class="mb-5">
                    <img src="img/blog-3.jpg" alt="" class="img-fluid rounded"/>
                    </div>
                    <PlainText></PlainText>
                    


    </div>
    </div>
    </div>
    </div>
  )
}
