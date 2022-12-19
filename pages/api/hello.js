// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const platforms = [
  { name: 'მაღაზია', url: '', slug: 'shop' },
  { name: 'მედიქალი', url: '', slug: 'medical' },
  { name: 'ვაუჩერი', url: '', slug: 'voucher' },
  { name: 'გათამაშება', url: '', slug: 'winning' },
  { name: 'თამაშები', url: '', slug: 'game' },
]

const header = []

const aboutPage = {
  title: 'ლოიალურობაზე დაფუძნებული ციფრული ეკოსისტემა',
  data: [
    {},
    {},
    {},
  ]
}

export default function handler(req, res) {
  res.status(200).json({
    platforms,
    header
  })
}
