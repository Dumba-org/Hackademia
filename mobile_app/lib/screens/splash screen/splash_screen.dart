import 'dart:async';

import 'package:csit_baba/constants/colors.dart';
import 'package:csit_baba/screens/auth/signup.dart';
import 'package:csit_baba/screens/mainscreen.dart/mainscreen.dart';
import 'package:flutter/material.dart';




class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Navigate to the next screen after 3 seconds
    Timer(const Duration(seconds: 3), () {
      Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (context) => const SignUpScreen(),  // Replace with your main screen widget
      ));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,  // Background color for splash
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Image.asset(
              'assets/images/logo.png',  // Replace with your logo path
              height: 120,
              width: 120,
            ),
            const Text("CSIT Baba", style: TextStyle(fontSize: 20, color: Colors.black,fontWeight: FontWeight.bold)),
            SizedBox(height: 30,) , // App name
            const Text("Your Education App", style: TextStyle(fontSize: 12, color: Colors.blue)),  // App name
            const SizedBox(height: 20),
             CircularProgressIndicator(
              color:primaryColor,  // Loading indicator
            ),
          ],
        ),
      ),
    );
  }
}