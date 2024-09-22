import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class Video2Imp extends StatefulWidget {
  @override
  _Video2ImpState createState() => _Video2ImpState();
}

class _Video2ImpState extends State<Video2Imp> {
  List<Map<String, Object>> _list = [
    {
      'id': "2",
      'name': "Functions of one variable",
      'videoUrl':
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      'thumbnailUrl':
          "https://i.ytimg.com/vi/05hFWEdhcbo/hqdefault.jpg",
    },
    {
      'id': "3",
      'name': "Limit",
      'videoUrl':
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      'thumbnailUrl':
          "https://i.ytimg.com/vi/riXcZT2ICjA/maxresdefault.jpg",
    },
    {
      'id': "4",
      'name': "Derivative",
      'videoUrl':
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      'thumbnailUrl':
          "https://i.ytimg.com/vi/05hFWEdhcbo/hqdefault.jpg",
    }
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Video Player Web Example'),
      ),
      body: ListView.builder(
        itemCount: _list.length,
        itemBuilder: (BuildContext ctx, int index) {
          return VideoItem(
            videoUrl: _list[index]['videoUrl'] as String,
            name: _list[index]['name'] as String,
          );
        },
      ),
    );
  }
}

class VideoItem extends StatefulWidget {
  final String videoUrl;
  final String name;

  VideoItem({required this.videoUrl, required this.name});

  @override
  _VideoItemState createState() => _VideoItemState();
}

class _VideoItemState extends State<VideoItem> {
  late VideoPlayerController _controller;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(widget.videoUrl)
      ..initialize().then((_) {
        setState(() {
          _isInitialized = true;
        });
      });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(widget.name, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        _isInitialized
            ? AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                child: VideoPlayer(_controller),
              )
            : Container(
                height: 200,
                color: Colors.black12,
                child: Center(
                  child: CircularProgressIndicator(),
                ),
              ),
        _isInitialized
            ? IconButton(
                icon: Icon(
                    _controller.value.isPlaying ? Icons.pause : Icons.play_arrow),
                onPressed: () {
                  setState(() {
                    _controller.value.isPlaying
                        ? _controller.pause()
                        : _controller.play();
                  });
                },
              )
            : SizedBox.shrink(),
      ],
    );
  }
}
