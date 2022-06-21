import 'package:flutter/material.dart';
import 'package:serficon/Pages/signInCustomer.dart';
import 'package:serficon/Pages/signInOwner.dart';

class StartingPage extends StatefulWidget {
  const StartingPage({Key? key}) : super(key: key);

  @override
  State<StartingPage> createState() => _StartingPageState();
}

class _StartingPageState extends State<StartingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: ()
              {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> const SignInOwner()));
              },
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.blueAccent.withOpacity(0.3)
                ),
                child: Text('Owner',style: TextStyle(fontSize: 35),),
              ),
            ),
            ElevatedButton(
              onPressed: ()
              {
                Navigator.push(context, MaterialPageRoute(builder: (context)=> const SignInCustomer()));

              },
              child: Container(
                decoration: BoxDecoration(
                    color: Colors.blueAccent.withOpacity(0.3)
                ),
                child: Text('Customer',style: TextStyle(fontSize: 35)),
              ),
            )
          ],
        ),
      ),
    );
  }
}

