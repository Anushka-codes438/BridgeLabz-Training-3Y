// Q5: Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Secure only if: alarm on AND door locked/closed AND window closed AND owner inside
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside} -> ${isSecure ? "Secure" : "Unsafe"}`
  );
}

// Test multiple outcomes
checkSecurity(true, true, true, true);    // Secure
checkSecurity(false, true, true, true);   // Unsafe (door unlocked)
checkSecurity(true, false, true, true);   // Unsafe (window open)
checkSecurity(true, true, false, true);   // Unsafe (alarm off)
checkSecurity(true, true, true, false);   // Unsafe (owner not inside)
