import VideosResponse.unwatchedVideos
import VideosResponse.watchedVideos
import kotlinx.css.*
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.h1
import react.dom.h3
import react.dom.img
import styled.css
import styled.styledDiv

class App : RComponent<RProps, RState>() {

    override fun RBuilder.render() {
        styledDiv {

            h1 { +"KotlinConf Explorer" }

            css {
                position = Position.absolute
                top = 10.px
                left = 10.px
            }

            h3 { +"Videos not watched" }
            child(VideoList::class) {
                attrs.videos = unwatchedVideos
            }

            h3 { +"Videos watched" }

            child(VideoList::class) {
                attrs.videos = watchedVideos
            }
        }

        styledDiv {
            css {
                position= Position.absolute
                top = 10.px
                right = 100.px
            }
            h3 { +"John Doe: Building and breaking things" }
            img {
                attrs {
                    src = "https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder"
                }
            }
        }
    }

}