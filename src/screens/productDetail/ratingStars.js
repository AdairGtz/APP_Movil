import { Icon } from "@rneui/themed"

const RatingStars = ({ rating }) => {

        const numerStart = Array.from({ length: 5 }, (_, i) => i + 1)
        
        return (
                <>
                        {
                                numerStart.map(item => (
                                        <Icon
                                                key={item}
                                                name='star'
                                                color={item <= rating ? '#FFC107' : '#C0C0C0'}
                                                size={20}
                                        />
                                ))
                        }
                </>
        )
}

export default RatingStars