function ItemCardSaved({ src, size }) {
  return (
    <>
      {src?.length !== 0 && (
        <img
          src={src}
          alt=''
          style={{
            objectFit: "cover",
            width: size,
            height: size,
            borderRadius: "16px",
          }}
        />
      )}
    </>
  )
}
export default ItemCardSaved
