import react.RBuilder
import react.RComponent
import react.RState
import react.dom.p

class VideoList: RComponent<VideoListProps, RState>() {

    override fun RBuilder.render() {
        for (video in props.videos) {
            p {
                key = video.id.toString()
                +"${video.speaker}: ${video.title}"
            }
        }
    }
}