from multiprocessing.sharedctypes import SynchronizedString
import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://music.bugs.co.kr/chart',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

songs = soup.select('#CHARTrealtime > table > tbody > tr')

for song in songs:
  rank = song.select_one('td > div > strong').text
  title = song.select_one('th > p > a').text
  name = song.select_one('td > p > a').text
  
  print(rank, title, name)