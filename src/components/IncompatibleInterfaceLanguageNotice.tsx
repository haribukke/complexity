import { useEffect } from 'react';

import $ from 'jquery';

import { useToast } from '@/components/ui/use-toast';
import { isDOMNode } from '@/utils/utils';

import useWaitForElement from './hooks/useWaitForElement';

export function IncompatibleInterfaceLanguageNotice() {
  const { toast } = useToast();

  const { element, isWaiting } = useWaitForElement({
    id: 'languageSelect',
    selector: '#interface-language-select',
  });

  useEffect(() => {
    if (!isDOMNode(element) || !$(element).length) return;

    const $select = $(element);
    if ($select.length) {
      if ($select.val() !== 'en-US') {
        toast({
          variant: 'destructive',
          title: '⚠️ Unsupported Language',
          description: (
            <span>
              The extension is only available in{' '}
              <span className="tw-font-bold">English.</span>
            </span>
          ),
        });
      }
    }
  }, [element, isWaiting, toast]);

  return null;
}
