import 'package:flutter/material.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Custom Drawer Header with Gradient and Profile Info
          Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [Colors.blueAccent, Colors.cyan],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
            ),
            padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 16),
            child: const Row(
              children: [
                CircleAvatar(
                  radius: 40,
                  backgroundImage: NetworkImage('https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=20&crop=false'),  // Customize this image
                ),
                SizedBox(width: 16),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'John Doe',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 22,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 5),
                    Text(
                      'johndoe@example.com',
                      style: TextStyle(
                        color: Colors.white70,
                        fontSize: 14,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          
          const SizedBox(height: 20),

          // Group of Navigational Items
          Expanded(
            child: ListView(
              padding: EdgeInsets.zero,
              children: [
                // Home Button
                ListTile(
                  leading: const Icon(Icons.home, color: Colors.blueAccent),
                  title: const Text(
                    'Home',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                 //   Navigator.pushNamed(context, '/home');
                  },
                ),
                // Profile Button
                ListTile(
                  leading: const Icon(Icons.person, color: Colors.blueAccent),
                  title: const Text(
                    'Profile',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                  //  Navigator.pushNamed(context, '/profile');
                  },
                ),
                // Notifications Button
                ListTile(
                  leading: const Icon(Icons.notifications, color: Colors.blueAccent),
                  title: const Text(
                    'Notifications',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                   // Navigator.pushNamed(context, '/notifications');
                  },
                ),
                // Settings Button
                ListTile(
                  leading: const Icon(Icons.settings, color: Colors.blueAccent),
                  title: const Text(
                    'Settings',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    Navigator.pushNamed(context, '/settings');
                  },
                ),
                const Divider(thickness: 1, indent: 16, endIndent: 16),

                // Help and Support Section
                ListTile(
                  leading: const Icon(Icons.help, color: Colors.green),
                  title: const Text(
                    'Help & Support',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  onTap: () {
                    Navigator.pop(context);
                    Navigator.pushNamed(context, '/help');
                  },
                ),
              ],
            ),
          ),

          // Add customizable social media icons at the bottom
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                IconButton(
                  icon: const Icon(Icons.facebook, color: Colors.blueAccent),
                  onPressed: () {
                    // Navigate to Facebook
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.people, color: Colors.blueAccent),
                  onPressed: () {
                    // Navigate to Twitter
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.person, color: Colors.blueAccent),
                  onPressed: () {
                    // Navigate to LinkedIn
                  },
                ),
              ],
            ),
          ),

          // Logout Button
          ListTile(
            leading: const Icon(Icons.logout, color: Colors.redAccent),
            title: const Text(
              'Logout',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Colors.redAccent,
              ),
            ),
            onTap: () {
              // Handle Logout
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    title: const Text('Logout'),
                    content: const Text('Are you sure you want to log out?'),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.pop(context),
                        child: const Text('Cancel'),
                      ),
                      TextButton(
                        onPressed: () {
                          Navigator.pop(context);
                         // Navigator.pushReplacementNamed(context, '/login');
                        },
                        child: const Text('Logout'),
                      ),
                    ],
                  );
                },
              );
            },
          ),
        ],
      ),
    );
  }
}