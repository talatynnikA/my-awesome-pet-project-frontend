# my-awesome-pet-project-frontend

#run in docker
cd frontend
docker build .  --tag my-front:latest -f Dockerfile
docker run -p 3000:3000 -t my-front:latest