import 'package:csit_baba/screens/auth/signup.dart';
import 'package:csit_baba/screens/mainscreen.dart/mainscreen.dart';
import 'package:csit_baba/screens/splash%20screen/splash_screen.dart';
import 'package:flutter/material.dart';

import 'screens/material/videos.dart';



void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
     home:  const SplashScreen(),
    );
  }
}

