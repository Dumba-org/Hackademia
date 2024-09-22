import 'package:csit_baba/screens/material/videos.dart';
import 'package:flutter/material.dart';

class SubjectDetails extends StatelessWidget {
  const SubjectDetails({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Mathematics"),
        ),
        body: Column(
          children: [
            SizedBox(
              height: 20,
            ),
            //grid view for notes,videos,modelquestions,chapterwise questions in card view contain a image and text
            Expanded(
              child: GridView.count(
                crossAxisCount: 2,
                children: [
                  InkWell(
                    onTap: () {
                      // Navigator.push(context, MaterialPageRoute(builder: (context) => const Notes()));
                    },
                    child: Card(
                      child: Column(
                        children: [
                           const SizedBox(
                            height: 40,
                          ),
                          Image.asset(
                            "assets/images/logo.png",
                            height: 100,
                            width: 100,
                          ),
                          Spacer(),
                          Text("Notes"),
                        ],
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) =>  Video2Imp()));
                    },
                    child: Card(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 40,
                          ),
                          Image.asset(
                            "assets/images/logo.png",
                            height: 100,
                            width: 100,
                          ),
                          Spacer(),
                          Text("video"),
                        ],
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      // Navigator.push(context, MaterialPageRoute(builder: (context) => const ModelQuestions()));
                    },
                    child: Card(
                      child: Column(
                        children: [
                           const SizedBox(
                            height: 40,
                          ),
                          Image.asset(
                            "assets/images/logo.png",
                            height: 100,
                            width: 100,
                          ),
                          Spacer(),
                          Text("Assignment"),
                        ],
                      ),
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      // Navigator.push(context, MaterialPageRoute(builder: (context) => const ChapterwiseQuestions()));
                    },
                    child: Card(
                      child: Column(
                        children: [
                           const SizedBox(
                            height: 40,
                          ),
                          Image.asset(
                            "assets/images/logo.png",
                            height: 100,
                            width: 100,
                          ),
                          Spacer(),
                          Text("Chapterwise Questions"),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ));
  }
}
