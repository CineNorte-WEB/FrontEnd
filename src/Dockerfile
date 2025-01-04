# 베이스 이미지
FROM node:16

# 작업 디렉토리 생성
WORKDIR /app

# 의존성 설치
COPY package.json ./
RUN npm install

# 애플리케이션 파일 복사
COPY . .

# React 빌드
RUN npm run build

# Nginx를 사용하여 빌드된 파일 제공
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Nginx 포트 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
