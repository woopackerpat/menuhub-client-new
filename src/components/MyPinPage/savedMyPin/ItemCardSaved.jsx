function ItemCardSaved({ src, size }) {
  return (
    <>
      {(src?.length !== 0 || src !== undefined) && (
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
