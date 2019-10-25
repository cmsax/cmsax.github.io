import json

a = [
    "https://latina-1253549750.cos.ap-shanghai.myqcloud.com/essay/imgs/20191019200425.png",
]


if __name__ == "__main__":
    with open('./fuck.json', 'w+') as f:
        o = [{
            "src": i,
            "date": "2018-01-01",
            "title": "Humans",
            "author": "Mingshi Cai",
            "type": "Film",
            "description": "Lorem: Unsplash was formed as the antithesis to the stock media experiences available at the time. Instead of vast libraries, licensed and presented for commercial buyers, we focused on pushing the impact of photography further than ever before by making original, high-resolution images available for anyone to use for anything."
        } for i in a]
        print('fuck', o)
        json.dump(o, f)
