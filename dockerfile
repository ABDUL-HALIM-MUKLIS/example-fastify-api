# Gunakan image Node.js sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /usr/src/app

# Copy file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependensi aplikasi
RUN npm install

# Copy seluruh aplikasi ke dalam container
COPY . .

# Ekspos port aplikasi (misalnya 3000)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
