import Welcome from './components/welcome.vue'
import UEditor from './components/UEditor.vue'

import NewsAdd from './components/news/newsAdd.vue'
import NewsList from './components/news/newsList.vue'
import NewsTag from './components/news/newsTag.vue'
import NewsAd from './components/news/newsAd.vue'
import NewsAdList from './components/news/newsAdList.vue'
import TeamAdd from './components/match/teamAdd.vue'
import teamManage from './components/match/teamManage.vue'
import addMember from './components/match/addMember.vue'
import RecommendSlide from './components/recommend/slide.vue'
import slideControl from './components/recommend/slideControl.vue'
import entertainment from './components/recommend/entertainment.vue'
import hottags from './components/recommend/hottags.vue'
import hotgames from './components/recommend/hotgames.vue'
import GuessAll from './components/guess/guessAll.vue'



export default{
    mode: 'history',
    routes: [
        {path: '/welcome', name:'welcome', component: Welcome},
        {
             path: '/news/add',
             name:'newsAdd',
             component: NewsAdd
        }
        ,
        {
            path: '/news/add/:id',
            name:'newsEdit',
            component: NewsAdd
        }
        ,
        {
            path: '/news/list',
            name:'newsList',
            component: NewsList
        }
        ,
        {
            path: '/news/tag',
            name:'newsTag',
            component: NewsTag
        }
        ,
        {
            path: '/news/ad/:id',
            name:'newsAd',
            component: NewsAd
        }
        ,
        {
            path: '/news/ad',
            name:'newsAd',
            component: NewsAd
        }
        ,
        {
            path: '/news/adlist',
            name: 'NewsAdList',
            component: NewsAdList
        }
        ,
        {
            path: '/recommend/slide',
            name:'slide',
            component: RecommendSlide
        }
        ,
        {
            path: '/recommend/slideControl',
            name:'slideControl',
            component: slideControl
        }
        ,
        {
            path: '/recommend/entertainment',
            name:'entertainment',
            component: entertainment
        }
        ,
        {
            path: '/recommend/hottags',
            name:'hottags',
            component: hottags
        }
        ,
        {
            path: '/recommend/hotgames',
            name:'hotgames',
            component: hotgames
        }
        ,
        {
            path: '/match/teamAdd',
            name:'teamAdd',
            component: TeamAdd
        }
        ,
        {
            path: '/match/teamManage',
            name:'teamManage',
            component: teamManage
        }
        ,
        {
            path: '/match/addMember',
            name:'addMember',
            component: addMember
        }
        ,
        {
            path: '/guess/all',
            name:'guessAll',
            component: GuessAll
        }
        ,
        {path: '*', redirect: '/welcome'}
    ]
}
