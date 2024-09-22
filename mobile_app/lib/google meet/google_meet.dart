import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class MeetingLink extends StatelessWidget {
  final String meetUrl = 'https://meet.google.com/jtp-rmtk-eyb'; // Your Google Meet URL

  // Function to launch a URL
  Future<void> _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Join Google Meet'),
        backgroundColor: Colors.blueAccent,
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () => _launchURL(meetUrl),
          child: Text('Join Google Meet'),
          style: ElevatedButton.styleFrom(backgroundColor: Colors.green),
        ),
      ),
    );
  }
}