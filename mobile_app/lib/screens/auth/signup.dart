import 'package:csit_baba/screens/mainscreen.dart/mainscreen.dart';
import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final _formKey = GlobalKey<FormState>();

  final _usernameController = TextEditingController();
  final _emailController = TextEditingController();
  final _contactController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();
  final _classController = TextEditingController();

  bool isPasswordVisible = false;
  String? selectedSkill;
  final List<String> skills = ['Programming', 'Design', 'Marketing', 'Writing'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 30),
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF80D0C7), Color(0xFF0093E9)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              children: [
                const SizedBox(height: 80),
                CircleAvatar(
                  radius: 60,
                  backgroundColor: Colors.white,
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Image.asset('assets/images/logo.png'),
                  ),
                ),
                const SizedBox(height: 30),
                const Text(
                  'Create an Account',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                const SizedBox(height: 20),

                // Username field
                _buildTextField(
                  controller: _usernameController,
                  label: 'Username',
                  icon: Icons.person,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter a username';
                    }
                    return null;
                  },
                ),

                // Email field
                const SizedBox(height: 15),
                _buildTextField(
                  controller: _emailController,
                  label: 'Email',
                  icon: Icons.email,
                  validator: (value) {
                    if (value == null ||
                        !RegExp(r'\S+@\S+\.\S+').hasMatch(value)) {
                      return 'Please enter a valid email';
                    }
                    return null;
                  },
                ),

                // Contact field
                const SizedBox(height: 15),
                _buildTextField(
                  controller: _contactController,
                  label: 'Contact',
                  icon: Icons.phone,
                  validator: (value) {
                    if (value == null || value.isEmpty || value.length < 10) {
                      return 'Please enter a valid contact number';
                    }
                    return null;
                  },
                ),

                // Class field
                const SizedBox(height: 15),
                _buildTextField(
                  controller: _classController,
                  label: 'Semester',
                  icon: Icons.class_,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your class';
                    }
                    return null;
                  },
                ),

                // Additional skill dropdown
                const SizedBox(height: 15),
                DropdownButtonFormField<String>(
                  value: selectedSkill,
                  decoration: InputDecoration(
                    labelText: 'Select Additional Skill',
                    filled: true,
                    //: Colors.black.withOpacity(0.8),
                    prefixIcon:
                        const Icon(Icons.school, color: Color(0xFF0093E9)),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(20),
                      borderSide:
                          BorderSide(color: Colors.black.withOpacity(0.5)),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(20),
                      borderSide: const BorderSide(color: Colors.black),
                    ),
                  ),
                  items: skills.map((String skill) {
                    return DropdownMenuItem<String>(
                      value: skill,
                      child: Text(skill),
                    );
                  }).toList(),
                  onChanged: (newValue) {
                    setState(() {
                      selectedSkill = newValue;
                    });
                  },
                  validator: (value) {
                    if (value == null) {
                      return 'Please select a skill';
                    }
                    return null;
                  },
                ),

                // Password field
                const SizedBox(height: 15),
                _buildPasswordField(
                  controller: _passwordController,
                  label: 'Password',
                  isVisible: isPasswordVisible,
                  onVisibilityChanged: () {
                    setState(() {
                      isPasswordVisible = !isPasswordVisible;
                    });
                  },
                  validator: (value) {
                    if (value == null || value.length < 6) {
                      return 'Password must be at least 6 characters long';
                    }
                    return null;
                  },
                ),

                // Confirm Password field
                const SizedBox(height: 15),
                _buildPasswordField(
                  controller: _confirmPasswordController,
                  label: 'Confirm Password',
                  isVisible: isPasswordVisible,
                  onVisibilityChanged: () {
                    setState(() {
                      isPasswordVisible = !isPasswordVisible;
                    });
                  },
                  validator: (value) {
                    if (value != _passwordController.text) {
                      return 'Passwords do not match';
                    }
                    return null;
                  },
                ),

                // Signup button
                const SizedBox(height: 30),
                ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      // Process signup logic
                      Navigator.pushReplacement(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const MainScreen()));
                    }
                  },
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 50, vertical: 15),
                    backgroundColor: Colors.black,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    shadowColor: Colors.black,
                    elevation: 10,
                  ),
                  child: const Text(
                    'Signup',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF0093E9),
                    ),
                  ),
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

  // Common text field widget
  Widget _buildTextField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
    required String? Function(String?)? validator,
  }) {
    return TextFormField(
      controller: controller,
      decoration: InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: Colors.black),
        filled: true,
        //: Colors.black.withOpacity(0.8),
        prefixIcon: Icon(icon, color: const Color(0xFF0093E9)),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20),
          borderSide: BorderSide(color: Colors.black.withOpacity(0.5)),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20),
          borderSide: const BorderSide(color: Colors.black),
        ),
      ),
      validator: validator,
    );
  }

  // Password field widget with visibility toggle
  Widget _buildPasswordField({
    required TextEditingController controller,
    required String label,
    required bool isVisible,
    required VoidCallback onVisibilityChanged,
    required String? Function(String?)? validator,
  }) {
    return TextFormField(
      controller: controller,
      obscureText: !isVisible,
      decoration: InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: Colors.black),
        filled: true,
        //: Colors.black.withOpacity(0.8),
        prefixIcon: const Icon(Icons.lock, color: Color(0xFF0093E9)),
        suffixIcon: IconButton(
          icon: Icon(
            isVisible ? Icons.visibility : Icons.visibility_off,
            color: const Color(0xFF0093E9),
          ),
          onPressed: onVisibilityChanged,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20),
          borderSide: BorderSide(color: Colors.black.withOpacity(0.5)),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20),
          borderSide: const BorderSide(color: Colors.black),
        ),
      ),
      validator: validator,
    );
  }
}
