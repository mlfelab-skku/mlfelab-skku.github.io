# 허정규 교수 연구실 사이트 — 셋업 / 인수인계 노트

felab(https://felab-unist.github.io/) 디자인을 차용해 **multi-language-al-folio**(al-folio의 공식
다국어 포크) 기반으로 구축한 **한/영 토글 학술 연구실 사이트**입니다. 콘텐츠는 기존 구글 사이트
(https://sites.google.com/view/jeonggyuhuh)의 각 페이지에서 그대로 이관했습니다.

## 현재 상태

- 언어: **en-us(기본) + ko**, 헤더 토글 버튼 자동 생성 (jekyll-polyglot)
- 브랜딩: felab 팔레트(브랜드 블루 `#2563EB`) + 폰트(Inter + Noto Sans KR)
- 배포 대상: **`shna00.github.io`** (`_config.yml`의 `url`). 추후 교수님 계정으로 옮기면 url만 수정.
- 통합 네비게이션 (상단 9개, Home=about):
  Research(드롭다운: Overview / Why BPTT≈Costate?) · People · Papers(드롭다운: Published / Papers in Progress) ·
  Talks · Projects · Teaching · News & Activities · Join us · CV

### 이관 완료된 실제 콘텐츠
- **Home**: 소개문(한/영), 직위·연구실(#31313)·이메일(jghuh@skku.edu), 연구 관심 2개
- **Research**: PG-DPO 3단계 방법론·동기·응용·확장
- **People**: PI + 박사후 1, 대학원생 11, 학부생 2, 동문 7 → `_data/members.yml`
- **Publications**: 게재 논문 **34편** (`_bibliography/papers.bib`) + 진행 중 **16편** (`in_progress.bib`)
- **Talks**: **100+건**, 연도별 (`_data/talks.yml`)
- **Projects**: 연구비 과제 8건 (`_data/grants.yml`)
- **Teaching**: 과목 전체(금융공학/기계학습/수학/프로그래밍)
- **CV**: 학력·경력 5건·수상 7건·학회활동 4건 (`_data/{en-us,ko}/cv.yml`)

## 남은 TODO (자료 받으면 채우기)
1. **PI Google Scholar ID**: `_data/socials.yml`의 `scholar_userid` 주석 해제 후 입력.
2. **Activities** 사진: `assets/img/activities/`에 넣고 갤러리 주석 해제.
3. (선택) 논문 썸네일: `preview={img}` + `assets/img/publications/`, PDF 등 링크 보강.

(완료: 프로필·구성원 사진 이관, Journal Club 제거, felab풍 디자인(_sass/_custom.scss) 적용.)

## 로컬 미리보기 (Docker)

```
docker compose build      # 최초 1회 (Gemfile + jekyll-polyglot 설치)
docker compose up         # http://localhost:8080
```

## 배포 (GitHub Pages + Actions)

1. shna00 계정에 **`shna00.github.io`** 이름의 빈 저장소 생성.
2. 이 폴더를 해당 저장소로 push (main).
3. GitHub 저장소 **Settings → Pages → Source = GitHub Actions**.
4. push 시 `.github/workflows/deploy.yml`가 빌드 후 `gh-pages`로 배포 → `https://shna00.github.io`.
