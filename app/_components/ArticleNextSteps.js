import Link from 'next/link';
import { getJourney, getNextSteps } from '@/lib/journeys';

export default function ArticleNextSteps({ article }) {
  const journey = getJourney(article.slug);
  const steps = getNextSteps(article.slug);
  if (!steps.length) return null;
  return (
    <aside className="next-steps" aria-labelledby="next-steps-title" data-journey={journey.id}>
      <h2 id="next-steps-title">{['notion', 'repere'].includes(article.type) ? 'Utiliser cette notion chez vous' : 'Pour votre projet'}</h2>
      <p>{journey.description}</p>
      <ul>
        {steps.map((step) => (
          <li key={step.href}>
            <Link href={step.href} data-cm-event="journey_click" data-cm-target={step.role}>
              <strong>{step.label} <span aria-hidden="true">→</span></strong>
              <span>{step.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
