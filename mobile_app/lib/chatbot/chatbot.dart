import 'dart:convert';
import 'package:dash_chat_2/dash_chat_2.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class ChatBot extends StatefulWidget {
  const ChatBot({super.key});

  @override
  State<ChatBot> createState() => _ChatBotState();
}

class _ChatBotState extends State<ChatBot> {
  ChatUser me = ChatUser(id: '1', firstName: 'Prince', lastName: 'Chaudhary');
  ChatUser bot = ChatUser(id: '2', firstName: 'Dumba');
  List<ChatMessage> allMessages = [];
  List<ChatUser> typing = [];
  final myUrl =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDWmQI6JAvDSeM3bw0rMIC-NvI3NowX7uE';
  final header = {'Content-Type': 'application/json'};
  bool isLoading = false;

  // get message data from user
  Future<void> getData(ChatMessage m) async {
    setState(() {
      typing.add(bot);
      isLoading = true;
    });
    
    allMessages.insert(0, m);
    var data = {
      "contents": [
        {
          "parts": [
            {"text": m.text}
          ]
        }
      ]
    };
    
    try {
      final response = await http.post(
        Uri.parse(myUrl),
        headers: header,
        body: jsonEncode(data),
      );

      if (response.statusCode == 200) {
        var result = jsonDecode(response.body);
        ChatMessage botMessage = ChatMessage(
          text: result['candidates'][0]['content']['parts'][0]['text'],
          user: bot,
          createdAt: DateTime.now(),
        );
        allMessages.insert(0, botMessage);
      } else {
        _showError('An error occurred. Please try again later.');
      }
    } catch (e) {
      _showError('Failed to connect. Please check your internet.');
    } finally {
      typing.remove(bot);
      isLoading = false;
      setState(() {});
    }
  }

  // Show error message
  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.redAccent,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text(
          '🤖 AI Assistant',
          style: TextStyle(
            fontSize: 25,
            fontWeight: FontWeight.w600,
            color: Colors.cyan,
          ),
        ),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          DashChat(
            typingUsers: typing,
            currentUser: me,
            onSend: (ChatMessage m) {
              getData(m);
            },
            messages: allMessages,
            messageOptions: MessageOptions(
              messageDecorationBuilder: (ChatMessage msg, ChatMessage? previousMsg, ChatMessage? nextMsg) {
                bool isUser = msg.user.id == me.id;
                return BoxDecoration(
                  color: isUser ? Colors.blue : Colors.green,
                  borderRadius: BorderRadius.circular(12),
                );
              },
            ),
            inputOptions: InputOptions(
              inputDecoration: InputDecoration(
                hintText: 'Type a message...',
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
            ),
          ),
          if (isLoading)
            Positioned(
              bottom: 80,
              left: MediaQuery.of(context).size.width / 2 - 15,
              child: CircularProgressIndicator(),
            ),
        ],
      ),
    );
  }
}