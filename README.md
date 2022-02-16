# Post Sıralama ve Post Ekleme

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

***

## Postlar okunmak istendiğinde

```bash
Enter your request:
[A] add post, [R] read posts.
R
********************* POST 1 STR *********************
Et qui occaecat enim fugiat tempor cillum pariatur nulla ex et.Minim dolore sint tempor cillum aute nulla occaecat commodo laboris eiusmod tempor fugiat amet occaecat.Laborum sint mollit ad amet.
********************* POST 1 END *********************

********************* POST 2 STR *********************
Occaecat minim enim elit ipsum et quis dolor do nisi commodo commodo.Aute excepteur id dolor tempor.Labore mollit velit magna exercitation cupidatat id commodo labore.
********************* POST 2 END *********************
```

## Post eklenmek istendiğinde

```bash
Enter your request:
[A] add post, [R] read posts.
A
Title:
POST 3
Content:
Culpa amet amet sit mollit do ad reprehenderit incididunt veniam consectetur proident amet incididunt quis.Excepteur laboris eu dolor culpa eiusmod sit quis duis in ex ullamco velit cupidatat culpa.
```

***

**JSON dosyası başlangıçta:**

```JSON
[
  {
    "title": "POST 1",
    "content": "Et qui occaecat enim fugiat tempor cillum pariatur nulla ex et.Minim dolore sint tempor cillum aute nulla occaecat commodo laboris eiusmod tempor fugiat amet occaecat.Laborum sint mollit ad amet."
  },
  {
    "title": "POST 2",
    "content": "Occaecat minim enim elit ipsum et quis dolor do nisi commodo commodo.Aute excepteur id dolor tempor.Labore mollit velit magna exercitation cupidatat id commodo labore."
  }
]
```

***

**JSON dosyası bitişte:**

```JSON
[
  {
    "title": "POST 1",
    "content": "Et qui occaecat enim fugiat tempor cillum pariatur nulla ex et.Minim dolore sint tempor cillum aute nulla occaecat commodo laboris eiusmod tempor fugiat amet occaecat.Laborum sint mollit ad amet."
  },
  {
    "title": "POST 2",
    "content": "Occaecat minim enim elit ipsum et quis dolor do nisi commodo commodo.Aute excepteur id dolor tempor.Labore mollit velit magna exercitation cupidatat id commodo labore."
  },
  {
    "title": "POST 3",
    "content": "Culpa amet amet sit mollit do ad reprehenderit incididunt veniam consectetur proident amet incididunt quis.Excepteur laboris eu dolor culpa eiusmod sit quis duis in ex ullamco velit cupidatat culpa."
  }
]
```
