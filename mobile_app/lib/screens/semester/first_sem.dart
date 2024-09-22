import 'package:csit_baba/screens/semester/subject_details.dart';
import 'package:flutter/material.dart';

class FirstSem extends StatelessWidget {
  FirstSem({super.key});

  List<String> subjects = [
    "Mathematics",
    "Physics",
    "IIT",
    "c programming",
    "digital logic",
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                  itemCount: subjects.length,
                  itemBuilder: (context, index) {
                    return InkWell(
                      onTap: () {
                        Navigator.push(context, MaterialPageRoute(builder: (context) => const SubjectDetails()));
                      },
                      child: Container(
                        margin: const EdgeInsets.all(5),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: Colors.white,
                          boxShadow: [
                            BoxShadow(
                              color: Colors.grey.withOpacity(0.5),
                              spreadRadius: 1,
                              blurRadius: 1,
                              offset: const Offset(0, 1),
                            ),
                          ],
                        ),
                        child: ListTile(
                          title: Text(subjects[index]),
                          leading: const Icon(Icons.book),
                          trailing: const Icon(Icons.arrow_forward),
                        ),
                      ),
                    );
                  }),
            ),
          ],
        ),
      ),
    );
  }
}