object VideosResponse {

    val unwatchedVideos = listOf(
        Video(1, "Building and breaking things", "John Doe", "https://youtu.be/PsaFVLr8t4E"),
        Video(2, "The development process", "Jane Smith", "https://youtu.be/PsaFVLr8t4E"),
        Video(3, "The Web 7.0", "Matt Miller", "https://youtu.be/PsaFVLr8t4E"),
        Video(4, "The Web 8.0", "George Tonks", "https://youtu.be/PsaFVLr8t4E")
    )

    val watchedVideos = listOf(
        Video(4, "Mouseless development", "Tom Jerry", "https://youtu.be/PsaFVLr8t4E")
    )
}