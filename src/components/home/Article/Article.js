import React from 'react'
import { ArticleStyled } from './Article.styles'

const Article = () => {
    return (
        <>
            <ArticleStyled className='grid-half'>
                <h3>What is a healthy diet?</h3>
                {/* if="articleItem.description.length === 1" */}
                <p>
                    Eating a healthy diet is not about strict limitations, staying unrealistically
                    thin, or depriving yourself of the foods you love. Rather, it’s about feeling
                    great, having more energy, improving your health, and boosting your mood.
                    Healthy eating doesn’t have to be overly complicated. If you feel overwhelmed by
                    all the conflicting nutrition and diet advice out there, you’re not alone. It
                    seems that for every expert who tells you a certain food is good for you, you’ll
                    find another saying exactly the opposite. The truth is that while some specific
                    foods or nutrients have been shown to have a beneficial effect on mood, it’s
                    your overall dietary pattern that is most important. The cornerstone of a
                    healthy diet should be to replace processed food with real food whenever
                    possible. Eating food that is as close as possible to the way nature made it can
                    make a huge difference to the way you think, look, and feel. By using these
                    simple tips, you can cut through the confusion and learn how to create—and stick
                    to—a tasty, varied, and nutritious diet that is as good for your mind as it is
                    for your body.
                </p>
                {/* else-if="articleItem.description.length > 1 */}
                {/* <ul class='bullet'>
                <li></li>
            </ul> */}
            </ArticleStyled>
            <ArticleStyled className='grid-half'>
                <h3>The fundamentals of healthy eating</h3>
                <p>
                    While some extreme diets may suggest otherwise, we all need a balance of
                    protein, fat, carbohydrates, fiber, vitamins, and minerals in our diets to
                    sustain a healthy body. You don’t need to eliminate certain categories of food
                    from your diet, but rather select the healthiest options from each category.
                    Protein gives you the energy to get up and go—and keep going—while also
                    supporting mood and cognitive function. Too much protein can be harmful to
                    people with kidney disease, but the latest research suggests that many of us
                    need more high-quality protein, especially as we age. That doesn’t mean you have
                    to eat more animal products—a variety of plant-based sources of protein each day
                    can ensure your body gets all the essential protein it needs. Learn more » Fat.
                    Not all fat is the same. While bad fats can wreck your diet and increase your
                    risk of certain diseases, good fats protect your brain and heart. In fact,
                    healthy fats—such as omega-3s—are vital to your physical and emotional health.
                    Including more healthy fat in your diet can help improve your mood, boost your
                    well-being, and even trim your waistline. Learn more »
                </p>
            </ArticleStyled>
        </>
    )
}

export default Article
