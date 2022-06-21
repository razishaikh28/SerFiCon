import 'dart:async';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:serficon/MainScreen/CustomerMenuPage.dart';
import 'package:serficon/MainScreen/MessOwnerMenuPage.dart';
import 'package:serficon/MainScreen/RoomOwnerMenuPage.dart';
import 'package:serficon/Pages/StartingPage.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  // ignore: deprecated_member_use
  late StreamSubscription<User?> user;
  var role;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    user=FirebaseAuth.instance.authStateChanges().listen((user) {
      if(user==null)
        {
          print('Signout');
        }
      else{
        databaseReference
            .child('Users')
            .child('all_users')
            .child(FirebaseAuth.instance.currentUser!.uid)
            .child('role')
            .once()
            .then((value) {
          role = value.snapshot.value.toString();
          print('Role is $role');
        });
      }
    });
  }
  DatabaseReference databaseReference = FirebaseDatabase.instance.reference();
  late FirebaseAuth auth;
  late bool issignIn = false;
  @override

void dispose() {
    user.cancel();
    // TODO: implement dispose
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      debugShowCheckedModeBanner: false,
            home: navigateToRightPage()
          );

  }

  Widget navigateToRightPage()  {

      switch(role.toString())
      {
        case 'room_owner' :   return const RoomOwnerMenuPage();
        case 'customer'   :   return const MenuPage();
        case 'mess_owner' :   return MessOwnerMenuPage();
        default           :   return const StartingPage();
      }

  }


}
