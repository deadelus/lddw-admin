[
  [
    '{{repeat(50)}}',
    {
      id: '{{index()}}',
      title: '{{lorem(1,"sentences")}}',
      medias: [
        {
          picture: [
            '{{repeat(1,5)}}',
            {
              url:   'http://placehold.it/500x500',
              thumb: 'http://placehold.it/100x100',
              srcset: '',
              size: '1px',
              onload: ''
            }
          ],
          gif: [
            '{{repeat(0,1)}}',
            {
              url:   'http://placehold.it/500x500',
              thumb: 'http://placehold.it/100x100'
            }
          ],
          video: [
            '{{repeat(0,1)}}',
            {
              download: 'http://placehold.it/32x32',
              stream: '',
              thumb: 'http://placehold.it/100x100'
            }
          ]
        }
      ],
      user: {
        name: '{{firstName()}} {{surname()}}',
        bio: '{{lorem(1, "words")}}',
        avatar: {
          url:   'http://placehold.it/500x500',
          thumb: 'http://placehold.it/32x32'
        }
      },
      date: '2 hours ago.',
      tags: [
        '{{repeat(0,4)}}',
        {
          name: '{{lorem(1, "words")}}',
          link: 'http://localhost:3000/tags/{{integer(1,4,"string")}}'
        }
      ],
      metas: {
        comments: 4,
        likes: 5,
        rates: 8
      },
      links: {
        comment: "http://localhost:3000/posts/{{index()}}/comments",
        like: "http://localhost:3000/posts/{{index()}}/likes",
        rate: "http://localhost:3000/posts/{{index()}}/rates",
        report: "http://localhost:3000/posts/{{index()}}/reports"
      }
    }
  ],
  [
    '{{repeat(4)}}',
    {
      id: '{{index()}}',
      body: '{{lorem(5,"words")}}',
      medias: [
        {
          picture: [
            '{{repeat(0,1)}}',
            {
              url:   'http://placehold.it/500x500',
              thumb: 'http://placehold.it/100x100',
              srcset: '',
              size: '1px',
              onload: ''
            }
          ]
        }
      ],
      user: {
        name: '{{firstName()}} {{surname()}}',
        avatar: {
          url:   'http://placehold.it/500x500',
          thumb: 'http://placehold.it/32x32'
        }
      },
      date: '2 hours ago.',
      metas: {
        comments: 4,
        likes: 5
      },
      links: {
        comment: "http://localhost:3000/comments/{{index()}}/comments",
        like: "http://localhost:3000/comments/{{index()}}/likes",
        report: "http://localhost:3000/comments/{{index()}}/reports"
      }
    }
  ],
  [
    '{{repeat(4)}}',
    {
      id: '{{index()}}',
      body: '{{lorem(5,"words")}}',
      medias: [
        {
          picture: [
            '{{repeat(0,1)}}',
            {
              url:   'http://placehold.it/500x500',
              thumb: 'http://placehold.it/100x100',
              srcset: '',
              size: '1px',
              onload: ''
            }
          ]
        }
      ],
      user: {
        name: '{{firstName()}} {{surname()}}',
        avatar: {
          url:   'http://placehold.it/500x500',
          thumb: 'http://placehold.it/32x32'
        }
      },
      date: '2 hours ago.',
      metas: {
        likes: 5
      },
      links: {
        like: "http://localhost:3000/comments/{{index()}}/likes",
        report: "http://localhost:3000/comments/{{index()}}/reports"
      }
    }
  ]
]