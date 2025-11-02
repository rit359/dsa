// Observer Design Pattern - The Observer Design Pattern is a behavioral design pattern in which one object (called the Subject) maintains a list of dependents (called Observers) and notifies them automatically of any state changes, usually by calling one of their methods.

// Subject (Publisher)
class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
  }

  notify(videoTitle) {
    this.subscribers.forEach(sub => sub.update(videoTitle));
  }
}

// Observer (Subscriber)
class User {
  constructor(name) {
    this.name = name;
  }

  update(videoTitle) {
    console.log(`${this.name} got notified: New video uploaded - "${videoTitle}"`);
  }
}

// Client code
const channel = new YoutubeChannel();

const user1 = new User("Ritesh");
const user2 = new User("Anita");

channel.subscribe(user1);
channel.subscribe(user2);

// When a new video is uploaded
channel.notify("Observer Pattern in JavaScript");
