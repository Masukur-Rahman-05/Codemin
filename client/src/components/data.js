export const langs = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  "c++": "10.2.0",
  java: "15.0.2",
  php: "8.2.3",
  go: "1.16.2",
};

export const languageSnippets = {
  javascript: `console.log("Hello, World!");`,

  typescript: `const message: string = "Hello, World!";
console.log(message);`,

  python: `print("Hello, World!")`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

  "c++": `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,

  c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

  go: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

  rust: `fn main() {
    println!("Hello, World!");
}`,

  php: `<?php
echo "Hello, World!";
?>`,

  ruby: `puts "Hello, World!"`,

  swift: `print("Hello, World!")`,

  kotlin: `fun main() {
    println("Hello, World!")
}`,

  dart: `void main() {
    print('Hello, World!');
}`,

  html: `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,

  css: `body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 50px;
}

h1 {
    color: #333;
}`,

  sql: `SELECT 'Hello, World!' AS message;`,
};
