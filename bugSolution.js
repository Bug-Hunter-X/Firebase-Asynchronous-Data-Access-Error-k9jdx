```javascript
// Bug: Accessing data before it's fetched
db.collection('users').doc('user1').get().then((doc) => {
  console.log(doc.data().name); // Error: May be undefined if data hasn't loaded yet
});

// Solution using promises
db.collection('users').doc('user1').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().name);
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});

// Solution using async/await
async function getUserData() {
  try {
    const doc = await db.collection('users').doc('user1').get();
    if (doc.exists) {
      console.log(doc.data().name);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
getUserData();
```