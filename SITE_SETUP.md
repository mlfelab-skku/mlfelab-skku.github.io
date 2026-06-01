# 허정규 교수 연구실 사이트 — 셋업 / 인수인계 노트

felab(https://felab-unist.github.io/) 디자인을 차용해, **multi-language-al-folio**(al-folio의 공식
다국어 포크) 기반으로 구축한 **한/영 토글 학술 연구실 사이트**입니다.

## 현재 상태 (스캐폴드 완료)

- 언어: **en-us(기본) + ko**, 헤더 토글 버튼 자동 생성 (jekyll-polyglot)
- 브랜딩: felab 팔레트(브랜드 블루 `#2563EB`)·폰트(Inter + Noto Sans KR) 적용
- 통합 네비게이션(구글 ∪ felab):
  Research(1) · People(2) · Publications(3) · Talks(4) · Projects(5) · Teaching(6) ·
  Journal Club(7) · Activities(8) · News(9) · Join us(10) · CV(11), Home(=about)
- Publications = "게재 논문"(`_bibliography/papers.bib`) + "진행 중 논문"(`_bibliography/in_progress.bib`) 2섹션
- 데모 콘텐츠(Einstein 프로필/논문, 데모 프로젝트·뉴스·블로그 포스트) 제거 완료
- 모든 YAML front matter 검증 통과 (로컬 Ruby 미설치로 실제 Jekyll 빌드는 미수행 — CI로 검증 예정)

## 채워야 할 콘텐츠 (코드에 `TODO(content)`로 표시)

1. **프로필 사진**: `assets/img/prof_pic.jpg` 교체.
2. **About/CV 사실 확인**: 학과·이메일·학위 연도, 경력(조교수/KIAS/박사후) 연도, 수상 7건(2019–2025) 정확한 명칭, 학회·편집 활동 4건 → `_pages/{en-us,ko}/about.md`, `_data/{en-us,ko}/cv.yml`.
3. **Publications**: Google Scholar에서 BibTeX 내보내 `_bibliography/papers.bib`에 붙여넣기 (진행 중 논문은 `in_progress.bib`). `selected={true}`면 홈에도 노출.
4. **People**: 구성원 명단/사진/약력 → `_pages/{en-us,ko}/profiles.md` 블록 추가, 사진 `assets/img/`.
5. **Talks / Teaching**: 실제 목록 → 각 페이지 표 또는 `_data/talks.yml`.
6. **Activities**: 사진을 `assets/img/activities/`에 넣고 갤러리 주석 해제.
7. **Journal Club**: 일정/논문 목록.
8. **소셜 링크**: `_data/socials.yml`에 Google Scholar ID 등 입력.

## 로컬 미리보기 (선택)

이 PC에는 Ruby/Docker가 없어 로컬 빌드를 못 했습니다. 미리 보려면 둘 중 하나:

- **Docker (권장, 간단)**: 저장소 루트에서 `docker compose up` → http://localhost:8080
- **Ruby 직접 설치**: RubyInstaller(Windows)로 Ruby 3.3.x 설치 후
  `gem install bundler` → `bundle install` → `bundle exec jekyll serve` → http://localhost:4000

## 배포 (GitHub Pages + Actions)

1. 소유 계정에서 **`<계정>.github.io`** 이름으로 빈 저장소 생성 (예: `jeonggyuhuh.github.io`).
   - 프로젝트 저장소(`<이름>`)로 할 경우 `_config.yml`의 `url`/`baseurl`을 그에 맞게 수정.
2. `_config.yml`의 `url`을 최종 주소로 수정 (현재 `https://jeonggyuhuh.github.io` 플레이스홀더).
3. 이 폴더를 해당 저장소로 push (main 브랜치).
4. GitHub 저장소 **Settings → Pages → Source = GitHub Actions**.
5. push 시 `.github/workflows/deploy.yml`가 빌드 후 `gh-pages`로 배포 → `https://<계정>.github.io` 확인.

## 한/영 번역 메모

`ko/` 페이지와 `_data/ko/strings.yml`는 주요 항목을 번역해 두었고, 미번역 UI 라벨은 기본 언어(en-us)로
폴백됩니다. 필요 시 `_data/ko/strings.yml`에서 추가 번역하세요.
