---
layout: default
title: "SARteam"
---

<div id="initial-letter-container">
  <div id="initial-letter" class="letter">A</div>
</div>
<script src="assets/js/message.js"></script>


<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Marine's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 20px;">
      <img src="assets/img/productrice.png" alt="Marine" style="width: 120px; height: 120px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color:rgb(255, 247, 230); padding: 20px; border-radius: 10px; max-width: 85%; width: 100%;">
      For over a century, cinema has shaped how we see the world, crafting our stories and reflecting our cultures. Yet, the way women are written remains trapped in the past. I’ve been a producer in this industry for over a decade and I remember standing backstage at the Oscars ceremony when a director remarked, “There just aren’t enough compelling stories with women leads.” How can we say that when we've barely allowed women to be anything but the mother, the wife, the lover?<br><br>
      I’m done watching brilliant actresses confined to clichés. I want to create movies where women drive the story, stories where they’re not just present but pivotal. It’s time to break free from the old narrative!
    </div>
  </div>

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 40px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 20px; border-radius: 10px; max-width: 85%; width: 100%; text-align: left;">
      We’re here to help you turn your vision into reality! Through our analysis, we will help you create a movie that not only shines at the box office but sets a new benchmark for equality in cinema. We'll guide you through the key ingredients for crafting a movie that is as inclusive as it is successful. Because while inclusivity is the mission, success is the name of the game and our recommendations are designed to deliver both.<br><br>
      So, let’s pull back the curtain on the current industry and explore the challenges that stand between you and a truly groundbreaking, inclusive movie. Together, let’s rewrite the narrative...
    </div>
    <div class="contact-picture" style="margin-left: 20px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 120px; height: 120px; border-radius: 50%;">
    </div>
  </div>

</div>


# Behind the curtain: The current state of women in cinema

<div style="display: flex; justify-content: center; align-items: center; margin: 0px auto; max-width: 1000px; flex-wrap: wrap;">
  <!-- Text Section -->
  <div style="flex: 1; padding-right: 40px; max-width: 50%; display: flex; align-items: center; box-sizing: border-box;">
    <p style="line-height: 1.8; font-size: 1.2em; margin: 0;">
      To truly understand the challenges women face in the film industry, we must first examine the current landscape.
      <br>
      This visualization highlights the current gender distribution in cinema, underscoring the imbalance that persists.
      As expected, a significant difference is observed in the number of actors between men and women. Now, the question is: even if women have always been underrepresented in cinema since its inception, has their representation increased over the years?
    </p>
  </div>

  <!-- Gender Distribution -->
  <div style="flex: 1; max-width: 50%; display: flex; justify-content: center; box-sizing: border-box;">
    <iframe src="assets/gender_distribution.html" width="100%" height="430px" style="border: none;"></iframe>
  </div>

</div>

  <div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
    <!-- Actor ratio per movie over the years -->
    <div style="width: 100%; max-width: 1000px; text-align: center;">
      <iframe src="assets/actress_prop_years.html" width="100%" height="600px" style="border: none;"></iframe>
    </div>
  </div>
  
   <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  The goal now is to observe whether the proportion of actress in the cast evolves over time. Note that the distribution of movies is uneven, with some years having significantly fewer movies represented in the dataset. This imbalance can introduce bias when analyzing trends. To ensure a fair and accurate analysis, we focus on years with a minimum of 500 movies, reducing the impact of data sparsity and providing a more reliable foundation for identifying patterns.
  </p>

   <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  The evolution of the proportion of actresses in main casts over the years reveals notable fluctuations, but a gradual improving trend has been observed since 1960. The correlation between years and actress proportion (Pearson correlation = 0.491, p-value = 3.87x10<sup>-5</sup>) indicates a statistically significant, moderate positive relationship, suggesting that women are slowly becoming more represented in casts. However, the pace of this progress is limited, as the proportion of women in main casts has only reached 0.38. This highlights the urgent need for more intentional and sustained efforts to foster equitable gender representation in the film industry. While progress has been made, the disparity underscores the systemic nature of gender imbalance in the film industry. The visual statistics below provide a clear snapshot of these trends, highlighting the need for continued efforts toward achieving gender parity in cinema.
  </p>
  <section style="margin: 40px auto; text-align: center;">
  <h2 style="margin-bottom: 20px; color:rgb(0, 0, 0);">Some statistics: Actor ratio per movie</h2>

<div class="counter-wrapper" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">

  <!-- Female Pearson Coefficient -->
  <div class="counter" style="background-color: #cb2006; padding: 20px; border-radius: 10px;" 
       title="The p-value of 3.87×10⁻⁵ associated with this coefficient confirms that this trend is both strong and statistically significant.">
    <i class="fa fa-female fa-2x" style="color:rgb(255, 255, 255);"></i>
    <div style="color: rgb(255, 255, 255); font-size: 2em; font-weight: bold; margin: 10px 0;">0.491</div>
    <p class="count-text" style="color:rgb(255, 255, 255);">
      Pearson Coefficient for correlation  <br> between years and actress proportion
    </p>
  </div>

  <!-- Male Actors per Movie -->
  <div class="counter" style="background-color: #ffebc4; padding: 20px; border-radius: 10px;"
    title="This value is when considering the main characters only">
    <i class="fa fa-chart-line fa-2x" style="color: #cb2006;"></i>
    <div style="color: #cb2006; font-size: 2em; font-weight: bold; margin: 10px 0;">8.27</div>
    <p class="count-text" style="color: #cb2006;">
      Average main Actors <br> per Movie
    </p>
  </div>

  <!-- Female Actors per Movie -->
  <div class="counter" style="background-color: #cb2006; padding: 20px; border-radius: 10px;"
    title="This value is when considering the main characters only">
    <i class="fa fa-chart-line fa-2x" style="color:rgb(255, 255, 255);"></i>
    <div style="color: rgb(255, 255, 255); font-size: 2em; font-weight: bold; margin: 10px 0;">2.70</div>
    <p class="count-text" style="color: rgb(255, 255, 255);">
      Average main Actresses <br> per Movie
    </p>
  </div>

  </div>
</section>

  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  This persistent imbalance raises important questions about the types of roles women are cast in and how their stories are represented within various film genres. To further explore this, we examined the prevalence of female protagonists across the most frequent movie genres, aiming to understand where progress is being made and where more work is needed. 
  </p>
  <div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
    <!-- pourcentage women by genre -->
    <div style="width: 100%; max-width: 1000px; text-align: center;">
      <iframe src="assets/pourcentage_women_by_genre.html" width="100%" height="600px" style="border: none;"></iframe>
    </div>
  </div>
  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  Understanding the most common character tropes for women and men in cinema provides insight into how gender roles have been historically depicted. The visualizations below highlight the top tropes for female and male characters.
  </p>
  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/top_tropes_women.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

  <div style="display: flex; justify-content: center; align-items: center; margin: 40px auto; max-width: 1000px;">
    <div style="flex: 1; max-width: 100%; text-align: center;">
      <iframe src="assets/top_tropes_men.html" width="100%" height="500px" style="border: none;"></iframe>
    </div>
  </div>

<p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
   Cinema often relies on stereotypical portrayals that reinforce traditional gender biases. Tropes such as the dumb blonde, brainless beauty, valley girl, and prima donna  emphasize superficial qualities, reducing women to their looks or perceived lack of intelligence. Similarly, emotionally charged roles like ophelia, broken bird, and chanteuse depict women as fragile, overly emotional, or in need of rescue, perpetuating the notion that women lack emotional stability or independence. As a result, female characters are frequently defined by their personalities or relationships rather than their ambition, skills, or leadership.
   
</p>

<section style="margin: 0px; display: flex; justify-content: space-between; gap: 30px; max-width: 1200px; margin-right: auto;">

  <!-- Left-aligned Text -->
  <div style="flex: 1;">
    <p style="font-size: 1.2em; line-height: 1.6; margin: 0;">
      The chi-square statistic indicates a strong deviation from the expected frequency distribution of the tropes between different genders. The small p-value of 5.6×10<sup>-42</sup> suggests that
      there is a highly significant association between the gender of the actor and the trope they portray. This means that the distribution of tropes across genders is not due to random chance, but rather there is a clear relationship between the two variables.
    </p>
  </div>

  <!-- Right-aligned Chi-square Box with Tooltip -->
  <div class="counter" 
       style="background-color: rgb(255, 247, 230); padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); max-width: 200px;" 
       title="The Chi-square statistic measures the deviation between observed and expected frequencies.">
    <div class="count-title count-number" style="color: #2c3e50; font-size: 2.5em; font-weight: bold; margin: 0 0 0px 0;">370.63</div>
    <p class="count-text" style="color: #2c3e50; font-weight: bold;">Chi-square statistic</p>
  </div>

</section>

# The Bechdel Test

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Marine's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 10px;">
      <img src="assets/img/productrice.png" alt="Marine" style="width: 100px; height: 100px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color: rgb(255, 247, 230); padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
      I’ve heard about this interesting metric called the Bechdel Test.
    </div>
  </div>

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%; text-align: left;">
      It’s a great starting point to evaluate how inclusive a movie is when it comes to gender representation. Let us walk you through it:
    </div>
    <div class="contact-picture" style="margin-left: 10px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
  </div>

</div>

### What is the Bechdel Test

<div style="margin: 20px 0; text-align: justify; font-size: 1.2em; line-height: 1.6;">
  <p>The Bechdel Test is based on three simple criteria:</p>

  <ol style="margin: 15px auto; padding-left: 20px; max-width: 1200px; list-style-position: outside; text-align: justify;">
    <li>Does the film have at least two named women?</li>
    <li>Do these women talk to each other?</li>
    <li>Do they discuss something other than a man?</li>
  </ol>

  <p>While it might seem like a basic checklist, you'd be surprised at how many films fail to meet these criteria. Though the Bechdel Test doesn't capture every aspect of inclusivity, it provides valuable insights into how women are represented in films. Let's explore the results from different regions and years to see how films have evolved over time.</p>
</div>

### Visualizing the Test's Results

<p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
Let's start by examining how the Bechdel Test scores have changed over the years.
</p>
<div style="display: flex; justify-content: center; align-items: center; margin: 0px auto; max-width: 900px;">
  <div style="flex: 1; max-width: 100%; text-align: center;">
    <iframe src="assets/avg_bechdel_score_by_year.html" width="100%" height="400px" style="border: none;"></iframe>
  </div>
</div>
<p style="font-size: 1.2em; line-height: 1.6; margin: px0 0;">
As we can see, before 1930, films generally scored below 2 on the Bechdel Test, meaning it was rare to have two named female characters discussing something other than men. The first film to score a 2 was "Manhandled," marking a significant milestone in gender representation. It was about time!<br><br>
Next, let's take a look at how the results vary around the world.
</p> 
<div style="display: flex; justify-content: center; align-items: center; margin: 0px auto; max-width: 1200px;">
  <div style="flex: 1; max-width: 100%; text-align: center;">
    <iframe src="assets/average_bechdel_score_map.html" width="100%" height="600px" style="border: none;"></iframe>
  </div>
</div>
<p style="font-size: 1.2em; line-height: 1.6; margin: 0px 0;">
However, be cautious when interpreting these results. Hovering over countries reveals that the U.S. has a disproportionately large number of films in the Bechdel Test database, which may skew the global representation.</p> 
<div style="display: flex; justify-content: center; align-items: center; margin: 0px auto; max-width: 1000px;">

    <!-- Gender Distribution (Moved to the left side) -->
    <div style="flex: 1; max-width: 60%; display: flex; justify-content: center;">
      <iframe src="assets/bechdel_countries_piechart.html" width="90%" height="550px" style="border: none;"></iframe>
    </div>

    <!-- Text Section (Moved to the right side) -->
    <div style="flex: 1; padding-left: 40px; max-width: 40%; display: flex; align-items: center;">
      <p style="line-height: 1.8; font-size: 1.2em; margin: 0;">
        To further highlight this, we have this pie chart showing the five countries with the most films in the database.<br>
        As expected, 80% of the films come from the United States. This heavy U.S. representation means we should be cautious when interpreting the Bechdel scores for other countries. Drawing sociological conclusions about women's status in cinema based on global data would be premature, as many countries are underrepresented. Our study, therefore, will focus on U.S. films for more reliable conclusions.
      </p>
    </div>

</div>
<p style="font-size: 1.2em; line-height: 1.6; margin: 0px 0;" > 
Now that we've looked at the Bechdel Test's evolution and its global representation, let's dive deeper into the relationship between a film's cast and its Bechdel Test score. Specifically, we will analyze how the proportion of female actresses in the main cast correlates with the film's Bechdel score.</p>

<div style="display: flex; justify-content: center; align-items: center; margin: 0px auto; max-width: 1000px;">
  <div style="flex: 1; max-width: 100%; text-align: center;">
    <iframe src="assets/bechdel_score_vs_female_ratio.html" width="100%" height="500px" style="border: none;"></iframe>
  </div>
</div>

<p style="font-size: 1.2em; line-height: 1.6; margin: 0px 0;">
Although the correlation between the Bechdel Test score and the proportion of female main cast members is modest, the extremely low p-value (10<sup>-175</sup>) suggests that this relationship is statistically significant.
<br>
Interestingly, we observe a film like "Sword of the Stranger," which has a Bechdel score of 3 but 0% female main characters. This indicates that a film can pass the Bechdel Test without having significant female presence in the main cast. This highlights the complexity of the Bechdel Test and how it doesn't always reflect the depth of female representation in a film.
<br><br>
While passing the Bechdel Test is a useful first step, it’s crucial to think beyond the test. What truly matters is how meaningful the roles of women are in film. Let’s explore how we can create films that are not only inclusive but also genuinely empowering for women.
</p>

# The Inclusivity Score

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Marine's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 10px;">
      <img src="assets/img/productrice.png" alt="Marine" style="width: 100px; height: 100px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color: rgb(255, 247, 230); padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
      This Bechdel Test is very interesting. However, if I create a movie with the intent of achieving a Bechdel score of 3, this is very easy. I just need to hire two women, name their character, and write a two-line dialogue about something unrelated to men.
    </div>
  </div>

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%; text-align: left;">
      Yes, you are right. Hence, we can create a more meaningful metric to help you evaluate whether a movie is truly inclusive!
    </div>
    <div class="contact-picture" style="margin-left: 10px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
  </div>

</div>

<p style="font-size: 1.2em; line-height: 1.6; margin: 20px 0;">
  The Bechdel score provides a solid foundation for developing an inclusivity metric. To build on this, we also evaluate the proportion of actresses in the movie to assess the level of female representation. However, this alone is insufficient. A movie may feature many women in minor or background roles, or conversely, a single actress who takes on the lead role. Therefore, we also consider the share of the script attributed to actresses to capture their meaningful presence in the film.
</p>

<p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  Indeed, looking at the distribution of the script in the figure below provided by <a href="https://pudding.cool/2017/03/film-dialogue/" target="_blank" rel="noopener noreferrer">The Pudding</a>, only 24% of movies show an equal or more female distribution of the script!
</p>

  <br>
  <div style="width: 100%; height: 100vh; overflow: hidden;">
    <iframe src='https://pudding.cool/2017/03/film-dialogue/embed.html' frameborder='0' style="width: 110%; height: 110%; border: none;"></iframe>
  </div>

<div style="font-size: 1.2em; line-height: 1.6; margin: 40px 0; text-align: justify;">
  <p>Thus, the inclusivity score is calculated as follows:</p>

  <div style="text-align: center; margin: 20px 0;">
    $$
    \textbf{Inclusivity Score} = \frac{\text{Normalized Bechdel Score} + \text{Promotion of Actress} + \text{Women’s Share of the Script}}{3}
    $$
  </div>

  <p>
    <strong>1. Normalized Bechdel Score:</strong> The traditional Bechdel score scaled to ensure compatibility with other metrics.<br>
    <strong>2. Promotion of Actress:</strong> The proportion of actresses in the movie compared to actors.<br>
    <strong>3. Women’s Share of the Script:</strong> The percentage of the script allocated to female characters.
  </p>

  <p>This approach ensures a more comprehensive and meaningful evaluation of inclusivity in movies, moving beyond the simplicity of the Bechdel Test.</p>

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Marine's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 10px;">
      <img src="assets/img/productrice.png" alt="Marine" style="width: 100px; height: 100px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color: rgb(255, 247, 230); padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
      This Inclusivity score is a good idea, but I have done some research. Look, movies with high success scores all have very poor representation ratings. I want to help the film industry become more equitable, but I don’t want my movie to fail.
    </div>
  </div>

</div>

{% include movie_dashboard.html %}

  <p style="font-size: 1.2em; line-height: 1.6; margin: 0px 0;">
    Indeed, when examining movies ranked by either their inclusivity or their success scores, we observe a potential negative correlation between inclusivity and success. Specifically, less inclusive movies appear to be more successful compared to their more inclusive counterparts. However, when looking at movies ranked by their success, the connection between success and low inclusivity becomes less apparent: some of the least successful movies have low inclusivity scores, while several successful movies demonstrate good inclusivity. That said, the very top-performing movies tend to remain relatively uninclusive. Further statistical analyses using both Pearson and Spearman correlation analyses provides a reassuring perspective, as the results indicate only a weak negative correlation. The Pearson correlation coefficient is -0.125 (p-value = 6.82x10<sup>-05</sup>), and the Spearman correlation coefficient is -0.126 (p-value = 6.33x10<sup>-05</sup>). While the low p-values indicate the results are statistically significant, the correlation coefficients are close to zero, signifying a very weak association. This suggests no meaningful evidence of inclusivity negatively impacting a movie's success.
  </p>

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%; text-align: left;">
      You can be reassured, if your movie is good, prioritizing inclusivity will not harm its success. However, there is still significant progress to be made before inclusivity becomes the norm in the movie industry. While we would expect that inclusivity positively contributes to a movie’s success, we are far from it. Achieving this will require continued efforts, such as better representation of women in storytelling and active advocacy within the industry.
    </div>
    <div class="contact-picture" style="margin-left: 10px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
  </div>
</div>
</div>

# The Success Metric

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Marine's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 10px;">
      <img src="assets/img/productrice.png" alt="Marine" style="width: 100px; height: 100px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color: rgb(255, 247, 230); padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
      Okay, this is nice. I guess we will succeed in making an inclusive movie. However, I am concerned that it might affect the success of my movie.
    </div>
  </div>

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%; text-align: left;">
      Defining what constitutes the success of a movie is not an easy task, but we will take up this challenge !
    </div>
    <div class="contact-picture" style="margin-left: 10px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
  </div>

</div>
<div style="font-size: 1.2em; line-height: 1.6; margin: 0px 0; text-align: justify;">
  <p> Naturally, we want the movie to generate as much revenue as possible, but we also consider it equally important for the movie to be appreciated by the audience. To capture this balance, we introduce a success metric:</p>

  <div style="text-align: center; margin: 20px 0;">
    $$
    \textbf{Net Box Office Revenue} = \text{Box Office Revenue} - \text{Initial Budget}
    $$
  </div>

  <div style="text-align: center; margin: 20px 0;">
    $$
    \textbf{Success Metric} = a_1 \cdot \text{rank}(\text{Net Box Office Revenue}) + a_2 \cdot \text{rank}(\text{Rating})
    $$
  </div>

  <p>Here, \( a_{1} \) and \( a_{2} \) are constants. In our case, we set \( a_{1} = a_{2} = 0.5 \), as we consider both rating and revenue equally important. This choice seems reasonable since the correlation of the ranking and the revenue is relatively weak (Pearson correlation = 0.273, p-value = 1.66<sup>-62</sup>; Spearman correlation = 0.271, p-value = 1.01<sup>-61</sup>), suggesting that the two metrics capture distinct and independent aspects of success. However, if someone wanted to prioritize either revenue or rating, the constants could be adjusted accordingly.</p>

  <p>Using the rank of revenue and rating ensures equal weighting between the two metrics, even if the revenue values are significantly large. For example, a movie with the highest revenue in the dataset will have rank (Net Box Office Revenue) = 1. However, if it is the lowest-rated movie, regardless of how large its revenue is, rank (Rating) = 0. In this case, the success metric would be 0.5. This ranking approach prevents the success metric from being disproportionately influenced by very high revenue figures, ensuring that both factors contribute fairly to the final score.</p>
</div>

  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">Now that we have defined the success metric, we decided to process our data using a decision tree. This approach helps us identify key features for predicting the success metric. To represent this method, we used a Sankey diagram, where nodes correspond to feature-based decision points (e.g., runtime, proportion of actresses, etc.), and links show the flow of samples satisfying those conditions. Each node displays a condition and its associated success score, providing insight into how the model predicts different outcomes. Features higher in the tree (closer to the left), like "Runtime" and "proportion_actress," are the most influential. While metrics related to women, such as the Bechdel score and inclusion scores, appear lower in the diagram (closer to the right), they provide valuable insights into the success of a movie whether positive or negative. However, due to limited information on some metrics, like the Bechdel test, for a significant portion of movies in our dataset, this part of the analysis is based on a smaller sample size. Consequently, these findings should be interpreted with caution, as the lack of data might affect the reliability of the conclusions.</p>

  <div class="sankey-container">
    {% include sankey_diagram.html %}
  </div>

### Some trivia

  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  Now that we have defined all our metrics and scores, you can now search for your favorite movie and see what score it has on those different metrics. You might be shocked of the results !
  </p>
  
  <!-- Search Widget -->
  <div class="search-widget">
    <div class="label">Search your favourite movie:</div>
    <input type="text" id="searchInput" placeholder="Type a movie title...">
    <div id="resultContainer">
      <!-- Results will be displayed here -->
    </div>
  </div>
  <script src="/SAR-ADA_website/search_engine/search.js"></script>
  <br />
  <br />
  <br />

# The path to inclusivity: Essential elements for your movie

<!-- Main Chat Section -->
<div class="chat-container" style="max-width: 1200px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">

  <!-- Producer's Message (Left) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <div class="contact-picture" style="margin-right: 10px;">
      <img src="assets/img/productrice.png" alt="Producer" style="width: 100px; height: 100px; border-radius: 30%;">
    </div>
    <div class="chat-bubble" style="background-color: rgb(255, 247, 230) ; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
      So, how can I make my movie as inclusive as possible? Which factors should I take into account?
    </div>
  </div>

  <!-- SAR's Message (Right) -->
  <div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px; justify-content: flex-end;">
    <div class="chat-bubble" style="background-color: #ffebc4; padding: 15px; border-radius: 10px; max-width: 80%; width: 100%; text-align: left;">
      To maximize your film’s inclusivity, it’s crucial to analyze the script in detail. We can help you identify the keywords and dialogues that foster fair and diverse representation. Using our inclusivity metric, we’ll assess how characters, their interactions, and the themes they explore reflect a wide range of genders, backgrounds, and roles.
    </div>
    <div class="contact-picture" style="margin-left: 10px;">
      <img src="assets/img/SAR.png" alt="SAR" style="width: 100px; height: 100px; border-radius: 50%;">
    </div>
  </div>
  </div>


  <p style="font-size: 1.2em; line-height: 1.6; margin: 20px 0;">
   Achieving inclusivity in storytelling relies not just on character roles but also on the language and emotional contexts within narratives
   By examining language, character roles, and emotional contexts, we have identified key factors that contribute to achieving inclusivity in storytelling. These insights can help guide the creation of narratives that resonate with modern audiences and promote authentic representation of women.
   <br>
   We analyzed various lexical categories, such as affection, joy, sadness, and sexist language and their correlation with inclusivity scores.
   <br>
  </p>
  <div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
  <!-- Correlation lexical categories and inclusivity score -->
  <div style="width: 100%; max-width: 1000px; text-align: center;">
    <iframe src="assets/correlation_lexical_inclusivity.html" width="100%" height="600px" style="border: none;"></iframe>
  </div>
  </div>
  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
   The results show that empathetic and supportive language has a strong positive correlation with inclusivity. Words related to affection, love, and joy create a narrative climate that promotes respect and empathy, which are essential for inclusive storytelling. Conversely, categories associated with crime, hostility, and negative emotions are negatively correlated with inclusivity, indicating that such themes can undermine inclusive values. To create inclusive stories, it is essential to foster a narrative environment that emphasizes kindness, respect, and emotional depth.<br> 
   By identifying which lexical categories contribute positively or negatively, as a producer you can adjust your language choices to craft more inclusive, respectful, and uplifting narratives.
   <br>
   </p>
 
<h2 style="margin-bottom: 20px; color:rgb(0, 0, 0);">Gender context statistics</h2>

<div class="counter-wrapper" style="display: flex; justify-content: center; gap: 30px; flex-wrap: nowrap;">

  <!-- Male Summaries Counter -->
  <div class="counter" style="background-color: #ffebc4; padding: 20px; border-radius: 10px; width: 250px; height: 150px;"
       title="Male context summaries: 501">
    <i class="fa fa-male fa-2x" style="color: #cb2006;"></i>
    <div style="color: #cb2006; font-size: 2em; font-weight: bold; margin: 10px 0;">47.8</div>
    <p class="count-text" style="color: #cb2006;">Percentage of male-context summaries (%)</p>
  </div>

  <!-- Female Summaries Counter -->
  <div class="counter" style="background-color:  #cb2006; padding: 20px; border-radius: 10px; width: 250px; height: 150px;"
       title="Female context summaries: 325">
    <i class="fa fa-female fa-2x" style="color: rgb(255, 255, 255);"></i>
    <div style="color: rgb(255, 255, 255); font-size: 2em; font-weight: bold; margin: 10px 0;">31</div>
    <p class="count-text" style="color: rgb(255, 255, 255);">Percentage of female-context summaries (%)</p>
  </div>

  <!-- Neutral Summaries Counter -->
  <div class="counter" style="background-color: rgb(255, 247, 230); padding: 20px; border-radius: 10px; width: 250px; height: 150px;"
       title="Neutral context summaries: 223">
    <i class="fa fa-users fa-2x" style="color: rgb(255, 247, 230);"></i>
    <div style="color: rgb(0, 0, 0); font-size: 2em; font-weight: bold; margin: 10px 0;">21.2</div>
    <p class="count-text" style="color: rgb(0, 0, 0);">Percentage of neutral-context summaries (%)</p>
  </div>

</div>

<h2 style="margin-top: 40px; color: rgb(255, 255, 255);">Average inclusivity score by gender context</h2>

<div class="counter-wrapper" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">

  <!-- Male Inclusivity Score -->
  <div class="counter" style="background-color: #ffebc4; padding: 20px; border-radius: 10px; width: 250px; height: 150px;">
    <div style="color:  #cb2006;; font-size: 2em; font-weight: bold; margin: 10px 0;">38</div>
    <p class="count-text" style="color:  #cb2006;;">Male average (%)</p>
  </div>

  <!-- Female Inclusivity Score -->
  <div class="counter" style="background-color:  #cb2006; padding: 20px; border-radius: 10px; width: 250px; height: 150px;">
    <div style="color: rgb(255, 255, 255); font-size: 2em; font-weight: bold; margin: 10px 0;">50</div>
    <p class="count-text" style="color: rgb(255, 255, 255);">Female average (%)</p>
  </div>

  <!-- Neutral Inclusivity Score -->
  <div class="counter" style="background-color: rgb(255, 247, 230); padding: 20px; border-radius: 10px; width: 250px; height: 150px;">
    <div style="color: rgb(0, 0, 0); font-size: 2em; font-weight: bold; margin: 10px 0;">41</div>
    <p class="count-text" style="color: rgb(0, 0, 0);">Neutral average (%)</p>
  </div>

</div>

  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
  By understanding how different lexical categories affect inclusivity, producers can strategically adjust language to craft respectful and uplifting stories. Our gender context statistics underscore this point: male-context summaries dominate at 47.8%, while female-context summaries lag at 31%. These imbalances highlight the need for more authentic female representation. Importantly, female-context narratives achieve higher inclusivity scores (50%) compared to male (38%) and neutral contexts (41%).
  </p>

  <div style="display: flex; justify-content: center; align-items: center; margin: 60px 0;">
  <!-- Correlation lexical categories and inclusivity score -->
  <div style="width: 100%; max-width: 1000px; text-align: center;">
    <iframe src="assets/correlation_word_categories_inclusivity.html" width="100%" height="630px" style="border: none;"></iframe>
  </div>
  </div>
  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
   Our analysis of word categories in female contexts reveals distinct patterns that influence inclusivity in storytelling. The bar chart highlights how specific word categories correlate with the inclusivity scores of female-led movie summaries. Categories with negative correlations such as professional roles and independence descriptors, suggest that narratives focusing solely on a woman’s professional status or independence, without emotional or relational depth, may feel less inclusive and relatable. In contrast, positive correlations emerge from themes like family roles, emotional descriptors, and relational terms, indicating that inclusive narratives often depict female characters as emotionally complex, supportive, and meaningfully connected to others.
   This does not mean professional or independent traits are inherently detrimental. Rather, our data suggests that higher inclusivity is achieved when stories blend personal growth, emotional depth, and supportive environments. To create truly inclusive and impactful female-led narratives, filmmakers must address both the quantity and quality of female representation. Including women in professional roles—such as scientists, lawyers, and leaders is vital, but a single professional female character can feel tokenistic. 
   For a balanced and authentic portrayal, multiple female characters should appear in professional, action-oriented, and leadership roles. When women are shown collaborating, leading, and contributing significantly, it reinforces that competence, agency, and leadership are intrinsic to their identities, not exceptions. Furthermore, these roles should be enriched with emotionally compelling story arcs, showcasing personal growth and meaningful relationships. This balance creates well-rounded, relatable characters that resonate with audiences, making the narrative more engaging, realistic, and inclusive.
  </p>
  <div style="display: flex; justify-content: center; align-items: center; margin: 0px 0;">
  <!-- word cloud -->
  <div style="width: 100%; max-width: 1200px; text-align: center;">
    <iframe src="assets\word_cloud.html" width="100%" height="620px" style="border: none;"></iframe>
  </div>
  </div>
  <p style="font-size: 1.2em; line-height: 1.6; margin: 0px 0;">
 The word cloud visualizes the most frequently used words in highly inclusive movie summaries. Dominant terms like "mother," "wife," "escape," "discover," "lead," and "fight" suggest that inclusive narratives depict women in a blend of familial roles and action-oriented roles. These characters are not just mothers or wives; they are also leaders, survivors, and active agents in their stories. This combination of relational depth and empowerment creates well-rounded, relatable characters.  The presence of relational roles alongside assertive actions suggests these stories recognize women as whole, multifaceted beings, capable leaders, courageous survivors, loving partners, and active contributors to the plot’s progression.
 Highly inclusive storytelling fuses relational depth with empowerment, autonomy, and purposeful actions, making characters both relatable and inspiring<br>
 </p>
 <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
 We have decide to create a word co-occurrence network which will help us visualize relationships between frequently occurring words in female-led movie summaries with high inclusivity scores. Each node represents a unique word, and the size of the node is proportional to the number of connections that word has with others. Words that appear together frequently are connected by edges. Hover over each node to see the word and the number of connections, and hover over the edges to see the co-occurrence frequency between word pairs. The network allows you to identify clusters of related words, which can reveal patterns or themes in the text. 
 <br>
 </p>
 <div style="display: flex; justify-content: center; align-items: center; margin: 0px 0;">
  <!-- word network -->
  <div style="width: 70%; max-width: 3500px; text-align: center;">
    <iframe src="assets/wordnetwork.html" width="100%" height="1100px" style="border: none;"></iframe>
  </div>
  </div>
  <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
 Central nodes like "mother" and "wife" dominate the network, highlighting their frequent association with various actions and descriptors. These characters are not limited to traditional roles but are connected with dynamic actions like "lead," "discover," and "support," reflecting empowered and multifaceted narratives. Words such as "fight," "rescue," and "investigate" indicate that women are often depicted as resilient, proactive, and intellectually engaged in movies with high inclusivity score. Familial roles, such as "daughter" and "sister," intersect with themes of agency and strength, suggesting that female characters balance relational identities with autonomy and action. However, peripheral roles like "soldier," "lawyer," and "professor" indicate that professional depictions 
 remain underrepresented. <br><br>
 Including women in roles traditionally dominated by men, such as "soldier," "lawyer," or "scientist," while maintaining their emotional depth, can break stereotypes and appeal to modern viewers. Storylines that highlight female resilience, empowerment, and resourcefulnes, reflected by words like "fight," "rescue," and "survive” tend  to engage audiences and reflect societal progress.
 Additionally, diversifying the ethnic backgrounds, ages, and body types of female characters enhances authenticity and broadens appeal. Representation of women in leadership or decision-making roles not only 
 promotes inclusivity but also connects with contemporary themes of empowerment and equality. Finally, for success, ensure that these stories are woven into compelling narratves with strong plot development, relatable challenges, and emotional resonance. Inclusive movies that celebrate diversity and 
 authenticity without sacrificing quality storytelling have the potential to achieve both critical acclaim and commercial success.<br>
 </p>

  <div style="width: 100%; margin-bottom: 20px;">
    <h2 style="color: #000000;">To conclude</h2>
  </div>

 <p style="font-size: 1.2em; line-height: 1.6; margin: 40px 0;">
 The data is clear: the statistics reveal a persistent imbalance in women’s representation in cinema. Despite improvements, the proportion of actresses in main casts remains just 38%, and the Bechdel Test continues to highlight films where women’s voices are absent.<br> Our Inclusivity Score, combining script distribution, character promotion, and dialogue analysis shows that films with higher inclusivity often strike a balance between professional roles and emotional depth. Meanwhile, the Success Metric demonstrates that inclusivity does not impact a film's box office performance or audience appreciation, with correlation coefficients pointing to only a weak negative relationship between inclusivity and success.<br>
The numbers tell us that success and inclusivity are not mutually exclusive, they can, and should, coexist. By addressing these metrics, filmmakers have the power to craft stories that are commercially successful and authentically inclusive. Let’s use these insights to redefine storytelling, ensuring the details of representation reflect a future where women are empowered, and integral to the evolution of the cinema.
  <br>
 </p>
  
 
 <!-- Producer's Conclusion (Left) -->
<div class="chat-message" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
  <div class="contact-picture" style="margin-right: 10px;">
    <img src="assets/img/productrice.png" alt="Producer" style="width: 100px; height: 100px; border-radius: 30%;">
  </div>
  <div class="chat-bubble" style="background-color: rgb(255, 247, 230) ;padding: 15px; border-radius: 10px; max-width: 80%; width: 100%;">
    Thank you, SAR team! Achieving inclusivity in storytelling relies not just on character roles but also on the language and emotional contexts within narratives. By examining these factors, we've identified what truly makes a story resonate with modern audiences. Your insights into language, character dynamics, and emotional depth have given me a clear path forward. I'm confident we can create stories that are not only inclusive but also compelling and authentic. Let's break the old narrative and set a new standard for storytelling!
  </div>
</div>

<audio id="letter-sound" src="assets/sounds/send.wav" preload="auto"></audio>



