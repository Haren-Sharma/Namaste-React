const TopRatedRestaurantCardComponent = (Restaurant) => {
  return (props)=>{
    return (
        <div>
        <div className="bg-amber-500" >Top Rated</div>
        <Restaurant {...props}/>
        </div>
    )
  }
}

export default TopRatedRestaurantCardComponent