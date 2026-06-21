
import requests, json

user = "saahiyo"
h = {"Accept": "application/vnd.github+json", "User-Agent": "analysis"}

prof = requests.get(f"https://api.github.com/users/{user}", headers=h).json()
print("PROFILE")
for k in ["login","name","bio","company","location","blog","public_repos","public_gists","followers","following","created_at","updated_at"]:
    print(f"  {k}: {prof.get(k)}")

repos = []
page = 1
while True:
    r = requests.get(f"https://api.github.com/users/{user}/repos",
                     headers=h, params={"per_page":100,"page":page,"sort":"updated"}).json()
    if not r: break
    repos.extend(r)
    if len(r) < 100: break
    page += 1

print("\nTOTAL REPOS FETCHED:", len(repos))
