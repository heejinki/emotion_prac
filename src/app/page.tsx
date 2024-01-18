'use client'

import Board from "./Board";
import Button from "./Button";

export default function Home() {
  return (
    <>
      <Button size="sm" variant="default">
        Default
      </Button>
      <Button size="md" variant="default">
        Default
      </Button>
      <Button size="lg" variant="default">
        Default
      </Button>
      <hr />
      <Button size="sm" variant="danger">
        Danger
      </Button>
      <Button size="md" variant="danger">
        Danger
      </Button>
      <Button size="lg" variant="danger">
        Danger
      </Button>
      <hr />
      <Button size="sm" variant="outline">
        Outline
      </Button>
      <Button size="md" variant="outline">
        Outline
      </Button>
      <Button size="lg" variant="outline">
        Outline
      </Button>
      <Board />
    </>
  );
}
