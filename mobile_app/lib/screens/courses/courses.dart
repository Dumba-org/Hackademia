import 'package:csit_baba/screens/semester/first_sem.dart';
import 'package:flutter/material.dart';
import 'dart:ui';


class SemesterGrid extends StatelessWidget {
  SemesterGrid({super.key});
  final List<String> semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Semesters'),
      ),
      body: GridView.builder(
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2, // Two cards per row
          childAspectRatio: 1.5,
          // Aspect ratio of each card
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
        ),
        itemCount: semesters.length,
        itemBuilder: (context, index) {
          return InkWell(
            onTap: () {
              // Handle semester selection
              // Navigator.of(context).pushNamed('/courses');
              Navigator.push(context, MaterialPageRoute(builder: (context) => FirstSem()));
            },
            child: ClipRRect(
              borderRadius: BorderRadius.circular(15), // Rounded corners
              child: Stack(
                fit: StackFit.expand,
                children: [
                  // Glassmorphic effect
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.white
                          .withOpacity(0.5), // Semi-transparent background
                      borderRadius: BorderRadius.circular(15),
                      border: Border.all(
                          color: Colors.white.withOpacity(0.2),
                          width: 1), // Optional border
                    ),
                  ),
                  // Background blur effect
                  BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(
                            0), // Fully transparent for the blur effect
                      ),
                    ),
                  ),
                  // Content of the card
                  Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [
                          Colors.blueAccent.withOpacity(0.8),
                          Colors.lightBlueAccent.withOpacity(0.3)
                        ],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(15),
                    ),
                    child: Center(
                      child: Text(
                        semesters[index],
                        style: const TextStyle(
                          shadows: [
                            Shadow(
                              color: Colors.black,
                              offset: Offset(1, 2),
                              blurRadius: 2,
                            ),
                          ],
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}