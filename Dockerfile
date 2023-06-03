FROM gcr.io/distroless/nodejs:18

COPY index.js ./

CMD ["."]
