#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

#import "RNSplashScreen.h"  // here

#import "Firebase.h"

#import <CodePush/CodePush.h> // code push
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"finegstApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }

  bool didFinish=[super application:application didFinishLaunchingWithOptions:launchOptions];
  
  [RNSplashScreen show];  // here
  [AppCenterReactNative register];
  [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
  [AppCenterReactNativeCrashes registerWithAutomaticProcessing];


  return didFinish;
  // return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
#endif
}

@end
