1) What is the difference between null and undefined?
Ans: Undefined হচ্ছে এমন কোন Variable যেটা ডিক্লেয়ার করা হয়ছে কিন্তু কোন মান সেটা করা হয়নি এবং Undefined জাভাস্ক্রিপ্ট নিজে সেট করে কোন ভ্যালু না পেলে। 
Null হচ্ছে ডেভেলপার নিজেই কোন Variable এর মান ইচ্ছে করে খালি রেখেছে এবং এটি ডেভেলপার কতৃক দেওয়া হয়।

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
আমরা Map ব্যাবহার করি যখন আমাদের কোন একটা অ্যারে কে লোপ চালানোর পর সেখান থেকে কোন ভেলু
রিটার্ন দরকার হয়।  forEach থেকে কোন রিটার্ন পাওয়া যায় না। আমরা যখন কোন অ্যারে থেকে বা অ্যারে অবজেক্ট থেকে লোপ চালিয়ে কোন ভালু রিটার্ন দরকার হয় না তখন ব্যাবহার করি।

3) What is the difference between == and ===?
== কোন ডাটা থেকে শুধুমাত্র ভ্যালোটা চেক করে, টাইপ চেক করে না।  যেমন 5=='5'  এটা সত্যি বলে গণ্য হবে।
এদিকে ===ডাটার মধ্যে ভ্যালো এবং টাইপ দুটোই চেক করে, যেমন উপরোক্ত উদাহরণ এ ক্ষেত্রে false দেখাবে কারণ 5 নাম্বার কিন্তু  '5' এটা স্ট্রিং।

4) What is the significance of async/await in fetching API data?
asynchronous হলো জাভাস্ক্রিপ্টে কোন কোড এক্সিকিউট হতে সময় লাগলে অপেক্ষা না করে পরের কোড এক্সিকিউট করে ফেলা। আর await হচ্ছে ডাটা ফেচ করার সময় প্রমিজ রিটার্ন দেওয়া পর্যন্ত অপেক্ষা করা তারপর পরের ধাপে যাওয়া।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).

স্কোপ হলে কোন একটা জায়গা, মানে কোন variable কোন স্কোপে আছে সেটা। কোন একটা variable যদি গ্লোবাল স্কোপে মানে কোন ফাংশনের  ভিতর বা কোন ব্লকের ভেতর না থাকে তাহলে সেটাকে যেকোন জায়গা থেকে access করা যাবে।  আর function স্কোপ মানে সেই ফাংশনের ভিতরেই কোন variable থাকলে তা access করা যাবে। বাহির থেকে করা যাবে না।  কিন্তু var কোন স্কোপ মানে না।  ব্লক স্কোপ মানে হলো শুধু মাত্র ঐ ব্লকের { } মাঝেই access করা যাবে অন্য কোথাও থেকে না।

Live Link: https://lambent-platypus-4db760.netlify.app/
GitHub Link: https://github.com/mdalamin0/SwiftCart-Shopping-Area